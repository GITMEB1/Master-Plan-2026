const App = {
    state: {
        jobApplications: 0,
        habits: {
            kitchen: false,
            inbox: false,
            prep: false,
            fun: false
        },
        missions: {
            pip: { current: 0, total: 4, labels: ["STRATEGY", "DIARY", "MEDICAL", "DRAFT", "SUBMITTED"] },
            hmrc: { current: 0, total: 3, labels: ["START", "ACCESS", "DRAFT", "FILED"] }
        },
        streak: 0,
        totalPoints: 0,
        lastActiveDate: null
    },

    config: {
        jobTarget: 5,
        storageKey: 'cmd_center_v3'
    },

    init() {
        this.loadState();
        this.checkDayReset();
        this.startClock();
        this.render();
        this.bindEvents();
    },

    startClock() {
        const updateTime = () => {
            const now = new Date();
            const timeEl = document.getElementById('digital-clock');
            const dateEl = document.getElementById('current-date');

            if (timeEl) timeEl.textContent = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
            if (dateEl) dateEl.textContent = now.toLocaleDateString('en-GB', { weekday: 'long', month: 'short', day: 'numeric' });
        };
        updateTime();
        setInterval(updateTime, 1000);
    },

    loadState() {
        const stored = localStorage.getItem(this.config.storageKey);
        if (stored) {
            const parsed = JSON.parse(stored);
            // Basic migration check
            if (!parsed.missions) parsed.missions = this.state.missions;
            this.state = { ...this.state, ...parsed };
        }
    },

    saveState() {
        localStorage.setItem(this.config.storageKey, JSON.stringify(this.state));
        this.render();
    },

    checkDayReset() {
        const today = new Date().toDateString();
        if (this.state.lastActiveDate !== today) {
            // Keep streak logic simple for now
            this.state.jobApplications = 0;
            this.state.habits = { kitchen: false, inbox: false, prep: false, fun: false };
            this.state.lastActiveDate = today;
            this.saveState();
        }
    },

    toggleHabit(habitId) {
        const isComplete = !this.state.habits[habitId];
        this.state.habits[habitId] = isComplete;
        if (isComplete) this.state.totalPoints += 1;
        else this.state.totalPoints = Math.max(0, this.state.totalPoints - 1);
        this.saveState();
    },

    updateJobCount(change) {
        const newCount = this.state.jobApplications + change;
        if (newCount >= 0) {
            this.state.jobApplications = newCount;
            if (change > 0) this.state.totalPoints += 1;
            if (change < 0) this.state.totalPoints = Math.max(0, this.state.totalPoints - 1);
            this.saveState();
        }
    },

    advanceMission(missionId) {
        const mission = this.state.missions[missionId];
        if (mission.current < mission.total) {
            mission.current += 1;
            this.state.totalPoints += 5;
            this.saveState();
        } else {
            alert("Mission Maxed!");
        }
    },

    forceNewDay() {
        if (confirm("SYSTEM RESET: Confirm?")) {
            this.state.lastActiveDate = null;
            this.checkDayReset();
            location.reload();
        }
    },

    render() {
        // Safe binding
        const streakEl = document.getElementById('streak-display');
        const pointsEl = document.getElementById('total-points-display');
        const xpFill = document.getElementById('xp-fill');

        if (streakEl) streakEl.textContent = this.state.streak;
        if (pointsEl) pointsEl.textContent = this.state.totalPoints;

        if (xpFill) {
            const xpPercent = Math.min((this.state.totalPoints % 100), 100);
            xpFill.style.width = `${xpPercent}%`;
        }

        this.renderJobStats();
        this.renderMissions();

        Object.keys(this.state.habits).forEach(habitId => {
            this.renderHabit(habitId);
        });
    },

    renderJobStats() {
        const count = this.state.jobApplications;
        const target = this.config.jobTarget;
        const percentage = Math.min((count / target) * 100, 100);

        const countEl = document.getElementById('job-count-display');
        const fill = document.getElementById('job-gauge');

        if (countEl) countEl.textContent = count;

        if (fill) {
            fill.style.width = `${percentage}%`;
            if (count >= target) {
                fill.style.backgroundColor = '#00FF9D';
                if (countEl) countEl.style.color = '#00FF9D';
            } else {
                fill.style.backgroundColor = '#00F0FF';
                if (countEl) countEl.style.color = '#00FF9D'; // Keep counter green or restore?
                // Actually reset counter color
                if (countEl) countEl.style.color = '#00FF9D';
            }
        }
    },

    renderMissions() {
        this.renderMissionPanel('pip');
        this.renderMissionPanel('hmrc');
    },

    renderMissionPanel(id) {
        const mission = this.state.missions[id];

        const statusDisplay = document.getElementById(`${id}-status-display`);
        const gauge = document.getElementById(`${id}-gauge`);
        const nextStepEl = document.getElementById(`${id}-next-step`);

        if (statusDisplay) statusDisplay.textContent = mission.labels[mission.current];

        if (gauge) {
            const percent = ((mission.current) / mission.total) * 100;
            gauge.style.width = `${percent}%`;
        }

        if (nextStepEl) {
            if (mission.current < mission.total) {
                nextStepEl.textContent = mission.labels[mission.current + 1];
            } else {
                nextStepEl.textContent = "COMPLETE";
                if (statusDisplay) statusDisplay.style.color = '#00FF9D';
            }
        }
    },

    renderHabit(habitId) {
        const element = document.getElementById(`habit-${habitId}`);
        const isComplete = this.state.habits[habitId];

        if (element) {
            if (isComplete) {
                element.classList.add('completed');
            } else {
                element.classList.remove('completed');
            }
        }
    },

    bindEvents() {
        window.toggleHabit = (id) => this.toggleHabit(id);
        window.updateJobCount = (n) => this.updateJobCount(n);
        window.advanceMission = (id) => this.advanceMission(id);

        const resetBtn = document.getElementById('btn-reset-day');
        if (resetBtn) resetBtn.addEventListener('click', () => this.forceNewDay());
    }
};

document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
