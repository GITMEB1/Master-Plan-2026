# The "Zero-Fail" Gmail Triage Kit

**Objective**: Reach "Safe State" (No missed debt/legal letters) in 60 minutes.
**Constraint**: Do not try to read everything. We are strictly sorting "Noise" vs. "Signal".

## Phase 1: The Mass Unsubscribe (The "Noise" Purge)

We cannot rely on clicking "Unsubscribe" manually 500 times. We use search operators to find the bulk offenders and delete them.

**Step 1: The "Unsubscribe" Search**
Copy-paste this into your Gmail Search bar:
`unsubscribe -label:RED-NUCLEAR`

**Step 2: The "Filter Bypass" (Best for 100+ emails)**
If the "Select all" link won't appear or you have thousands of emails, use this "Force Move" method:
1.  Click the "Show search options" icon (sliders) in the search bar.
2.  In **Has the words**, paste: `unsubscribe -label:RED-NUCLEAR`
3.  Click **Create filter**.
4.  Check: **[x] Delete it**.
5.  Check: **[x] Also apply filter to matching conversations**. (This is the "Delete 1600" button).
6.  Click **Create filter**.
7.  **IMPORTANT**: Go to Settings (Gear) -> See all settings -> Filters and Blocked Addresses. **Delete the filter you just created** immediately, otherwise any *new* emails with the word "unsubscribe" will be deleted automatically.

---

## Phase 2: The "Red Letter" Safety Net (Automation)

We need a system that shouts at you when something dangerous arrives.

**Step 1: Create the "RED-NUCLEAR" Label**
1.  On the left sidebar, scroll down to "Create new label".
2.  Name it: `RED-NUCLEAR`.
3.  Color it: Click the 3 dots next to the label -> Label Color -> **Red**.

**Step 2: The "Danger List" Filter**
1.  Click the "Show search options" icon (sliders) in the search bar.
2.  In the **From** field, paste these common UK creditors/agencies (add your specific ones):
    `*@hmrc.gov.uk OR *@dwp.gov.uk OR *@creditfix.co.uk OR *@stepchange.org OR *@council.gov.uk OR *@advantis.co.uk OR *@lowell.co.uk OR *@pra-group.com`
3.  In the **Subject** field, paste:
    `"Important" OR "Urgent" OR "Overdue" OR "Arrears" OR "Tenancy" OR "Eviction" OR "Warrant"`
4.  Click **Create filter**.
5.  **Check these boxes**:
    - [x] Apply the label: `RED-NUCLEAR`
    - [x] Star it
    - [x] Never send it to Spam
    - [x] Mark as important
6.  Click **Create filter**.

---

## Phase 3: The "Human" Filter (Lane 2 Priority)

Ensure job offers and replies don't get lost.

1.  Search: `(interview OR offer OR "next steps" OR update) -from:linkedin -from:indeed`
2.  Create Filter -> Apply Label: `AMBER-OPPORTUNITY` (Make this Orange).
3.  Star it.

---

## Phase 4: The Daily Ritual (2 Minutes)

You are no longer allowed to browse your inbox. You strictly check the labels.

1.  **Open Gmail.**
2.  **Click `RED-NUCLEAR` label.** (Is it empty? Good.)
3.  **Click `AMBER-OPPORTUNITY` label.** (Any replies? Handle them.)
4.  **Close Gmail.**
