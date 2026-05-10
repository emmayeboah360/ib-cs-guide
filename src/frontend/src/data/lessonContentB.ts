// Detailed lesson content for IB DP Computer Science — Theme B: Computational Thinking & Problem-Solving
// References: Oxford IB CS (Wajan Langfield), Hodder IB CS (Paul Baumgarten),
// Isaac Computer Science, Khan Academy, BBC Bitesize, VisuAlgo, Real Python, Python.org

import type { SubtopicLesson } from "./lessonContentA";
export type { SubtopicLesson };

export const lessonContentB: Record<string, SubtopicLesson> = {
  // ─── B.1 Computational Thinking ──────────────────────────────────────────────

  "B.1.1": {
    conceptExplanation: `**Computational thinking** is a problem-solving approach that draws on the core concepts of Computer Science. It is not about thinking like a computer — it is about thinking clearly, systematically, and creatively about problems. The four pillars are decomposition, abstraction, pattern recognition, and algorithmic thinking.

**Decomposition** means breaking a large, complex problem into smaller, more manageable sub-problems. Each sub-problem can be solved independently, and the solutions combined to solve the original problem. This is how all large software systems are built.

Example — building a video game:
- Input handling sub-problem (keyboard, mouse, controller events)
- Game logic sub-problem (physics, collision detection, scoring rules)
- Rendering sub-problem (drawing sprites, backgrounds, UI elements)
- Sound sub-problem (effects, music, volume control)
- Data persistence sub-problem (saving/loading game state)

Each sub-problem becomes a module that a different developer (or team) can work on simultaneously. This is why decomposition is fundamental to all software engineering.

Real-world example — Google Maps route finding is decomposed into: (1) getting the user's current location, (2) validating the destination, (3) computing the fastest route algorithm, (4) checking real-time traffic data, (5) rendering the route on the map, (6) generating turn-by-turn voice instructions. Each is a separate, independently testable sub-system.

**Abstraction** means focusing only on the essential details of a problem and hiding (ignoring) the irrelevant complexity. Abstraction allows us to think about a problem at the right level of detail without being overwhelmed.

Example — when you drive a car, you use the steering wheel, pedals, and gear lever. You do not need to understand the internal combustion engine, hydraulic braking system, or electronic stability control — those details are *abstracted away*. The steering wheel is an abstraction of "controlling direction."

In programming:
- A function is an abstraction — you call sqrt(x) without knowing the Newton-Raphson algorithm inside.
- An object is an abstraction — you call account.deposit(100) without knowing how balance is stored in memory.
- A protocol like HTTP is an abstraction — you send a request without understanding TCP packet assembly.

IB command terms you need to know: **identify** (state a specific item), **describe** (give a detailed account), **explain** (give a reason or mechanism), **evaluate** (make a judgement based on evidence).

**Pattern Recognition** means identifying similarities, regularities, or repeated structures across problems. When you recognise a pattern, you can apply a known solution rather than inventing one from scratch.

Example: You notice that both binary search and the phone book work by repeatedly halving a search space. Recognising this pattern means you can apply the same strategy to any similar sorted dataset.

**Algorithmic Thinking** means defining a precise, step-by-step sequence of instructions that will solve a problem correctly for any valid input. An algorithm must be: unambiguous (each step has only one interpretation), finite (it must eventually stop), and effective (each step must be doable).`,
    keyTerms: [
      {
        term: "Computational Thinking",
        definition:
          "A problem-solving methodology drawing on decomposition, abstraction, pattern recognition, and algorithmic thinking to formulate solutions.",
      },
      {
        term: "Decomposition",
        definition:
          "Breaking a complex problem into smaller, independent sub-problems that are each easier to understand, solve, and test separately.",
      },
      {
        term: "Abstraction",
        definition:
          "Hiding irrelevant detail and focusing only on the essential features needed to solve a problem at a particular level of thinking.",
      },
      {
        term: "Pattern Recognition",
        definition:
          "Identifying similarities, regularities, or repeated structures in problems that allow known solutions to be reused or generalised.",
      },
      {
        term: "Algorithmic Thinking",
        definition:
          "Designing a precise, unambiguous, step-by-step sequence of instructions that solves a problem correctly for all valid inputs.",
      },
      {
        term: "Sub-problem",
        definition:
          "A smaller, self-contained problem that results from decomposing a larger problem; each sub-problem can be solved and tested independently.",
      },
      {
        term: "Generalisation",
        definition:
          "Adapting a solution from one problem to work across a broader range of similar problems, enabled by pattern recognition.",
      },
    ],
    workedExample: `**Applying All Four Pillars — Designing a School Timetabling System:**

Problem: Build a software system that generates a valid weekly timetable
for 40 teachers, 30 classrooms, and 600 students.

1. DECOMPOSITION:
   Break into sub-problems:
   a) Data input: load teachers, rooms, subjects, student groups
   b) Constraint checking: no teacher in two places at once,
      room capacity not exceeded, required subjects covered
   c) Scheduling algorithm: assign time slots to lessons
   d) Conflict resolution: detect and fix clashes
   e) Output: display and print the timetable
   f) User interface: allow admin to view/edit manually

2. ABSTRACTION:
   - Don't worry HOW the scheduling algorithm works yet;
     just define its inputs (teachers, rooms, slots) and outputs (assignments)
   - Abstract a "lesson" as just: subject + teacher + room + time slot
   - Abstract away building floor plans — only room capacity matters

3. PATTERN RECOGNITION:
   - This looks like a "constraint satisfaction problem" (CSP)
   - Similar to Sudoku solving — same algorithmic family applies
   - Bin-packing algorithms from logistics apply here too
   - Recognising this lets you research known CSP solutions

4. ALGORITHMIC THINKING:
   Algorithm sketch (backtracking CSP):
   FOR each unassigned lesson:
     FOR each available time slot:
       IF no constraint violated:
         Assign lesson to time slot
         RECURSIVELY assign next lesson
         IF solution complete: RETURN solution
       ELSE: try next slot
   IF no valid slot found: BACKTRACK and try different earlier assignment

IB exam tip: When asked to "identify computational thinking concepts",
always explain HOW each concept applies — don't just name them.`,
    resources: [
      {
        title: "Isaac Computer Science — Computational Thinking",
        url: "https://isaaccomputerscience.org/topics/computational_thinking",
        description:
          "Full IB-aligned lesson set on decomposition, abstraction, pattern recognition, and algorithmic thinking with practice questions.",
        type: "website",
      },
      {
        title: "Khan Academy — Computational Thinking",
        url: "https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/getting-started/a/what-is-computational-thinking",
        description:
          "Clear introduction to all four pillars of computational thinking with relatable real-world examples.",
        type: "video",
      },
      {
        title: "BBC Bitesize — Computational Thinking",
        url: "https://www.bbc.co.uk/bitesize/guides/zp92mp3/revision/1",
        description:
          "Concise revision of decomposition, abstraction, pattern recognition, and algorithms with exam-style questions.",
        type: "website",
      },
      {
        title:
          "Oxford IB Computer Science — Wajan Langfield (Theme B Introduction)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "Authoritative IB-aligned coverage of computational thinking concepts with exam command-term focus.",
        type: "textbook",
      },
    ],
  },

  "B.1.2": {
    conceptExplanation: `**Algorithm design** is the process of creating a precise, step-by-step solution to a problem. The IB course requires you to write algorithms using two notations: **pseudocode** and **flowcharts**.

**IB Standard Pseudocode Syntax:**
The IB uses a specific pseudocode style in examinations. You must know it precisely:
- Assignment: X := 5 (not =, not <-)
- Output: OUTPUT X  or  OUTPUT "message"
- Input: INPUT X
- Conditional: IF condition THEN ... ELSE ... END IF
- FOR loop: FOR I = 1 TO 10 ... END FOR (or NEXT I)
- WHILE loop: WHILE condition DO ... END WHILE
- Array access: ARR[I] (1-indexed in IB pseudocode)
- Comments: // this is a comment

**Flowchart Symbols (standard):**
- Oval (rounded rectangle): START / END (terminator)
- Rectangle: Process (e.g., X := X + 1)
- Diamond: Decision (condition with YES/NO branches)
- Parallelogram: Input / Output (I/O)
- Arrow: Flow of control direction

**Common Algorithms Every Student Must Know:**

**Linear Search:** Checks every element from the beginning until the target is found or the list is exhausted. Works on any list (sorted or unsorted). Time complexity O(n).

**Binary Search:** ONLY works on a sorted list. Repeatedly halves the search space. Compare target with the middle element — if equal, found; if target is smaller, search left half; if larger, search right half. Time complexity O(log n) — dramatically faster than linear search for large datasets.

**Bubble Sort:** Compare adjacent pairs; swap if they are in the wrong order. Repeat n-1 passes through the array. After each full pass, the next largest element "bubbles" to its correct position. Simple but slow: O(n²).

**Selection Sort:** Find the minimum element in the unsorted portion, swap it to the front. Repeat, shrinking the unsorted portion by one each time. O(n²) — slightly more efficient than bubble sort in terms of swaps.

**Insertion Sort:** Build a sorted sub-list from left to right. Take each new element and insert it into its correct position in the already-sorted portion by shifting elements right. Best case O(n) when already sorted; average and worst case O(n²). Very efficient for small or nearly-sorted lists.

**Trace Tables** are essential for the IB exam. A trace table shows the value of each variable at each step of algorithm execution — used to verify correctness or to identify bugs.`,
    keyTerms: [
      {
        term: "Pseudocode",
        definition:
          "An informal, high-level description of an algorithm using human-readable language structured like a programming language, without following exact syntax rules.",
      },
      {
        term: "Flowchart",
        definition:
          "A visual diagram representing the flow of control in an algorithm, using standardised symbols for processes, decisions, input/output, and start/end.",
      },
      {
        term: "Linear Search",
        definition:
          "A search algorithm that examines each element in a list one by one from the start until the target is found or the list is exhausted. O(n) time complexity.",
      },
      {
        term: "Binary Search",
        definition:
          "A search algorithm that requires a sorted list and repeatedly halves the search space by comparing the target with the middle element. O(log n) time complexity.",
      },
      {
        term: "Bubble Sort",
        definition:
          "A sorting algorithm that repeatedly compares adjacent elements and swaps them if out of order, causing larger elements to 'bubble' to the end. O(n²).",
      },
      {
        term: "Selection Sort",
        definition:
          "A sorting algorithm that repeatedly finds the minimum element in the unsorted portion and places it at the front. O(n²) comparisons.",
      },
      {
        term: "Insertion Sort",
        definition:
          "A sorting algorithm that builds a sorted sub-list by taking each element and inserting it at the correct position among already-sorted elements.",
      },
      {
        term: "Trace Table",
        definition:
          "A table used to manually trace algorithm execution, recording variable values at each step to verify correctness or find errors.",
      },
      {
        term: "Precondition",
        definition:
          "A condition that must be true before an algorithm or function is called for it to work correctly. E.g., binary search requires the list to be sorted.",
      },
    ],
    workedExample: `**IB Pseudocode — Binary Search Algorithm:**

Problem: Search for target T in sorted array A of size N.

A[1..N] = [3, 7, 12, 19, 25, 34, 41, 58]   N=8, T=25

Pseudocode:
  LOW  := 1
  HIGH := N
  FOUND := FALSE

  WHILE LOW <= HIGH AND NOT FOUND DO
    MID := (LOW + HIGH) DIV 2
    IF A[MID] = T THEN
      FOUND := TRUE
    ELSE IF T < A[MID] THEN
      HIGH := MID - 1
    ELSE
      LOW  := MID + 1
    END IF
  END WHILE

  IF FOUND THEN
    OUTPUT "Found at position: ", MID
  ELSE
    OUTPUT "Not found"
  END IF

Trace Table for T=25:

| Pass | LOW | HIGH | MID | A[MID] | Action       |
|------|-----|------|-----|--------|--------------|
|  1   |  1  |   8  |  4  |   19   | T>19: LOW=5  |
|  2   |  5  |   8  |  6  |   34   | T<34: HIGH=5 |
|  3   |  5  |   5  |  5  |   25   | FOUND=TRUE   |

Result: Target 25 found at index 5 in just 3 comparisons.
Linear search would take up to 8 comparisons worst-case.

---

**Bubble Sort Trace — Sorting [64, 25, 12, 22, 11]:**

Pass 1: [64,25,12,22,11]
  (64>25) swap -> [25, 64, 12, 22, 11]
  (64>12) swap -> [25, 12, 64, 22, 11]
  (64>22) swap -> [25, 12, 22, 64, 11]
  (64>11) swap -> [25, 12, 22, 11, 64] <- 64 in correct position

Pass 2: [25, 12, 22, 11, 64]
  (25>12) swap -> [12, 25, 22, 11, 64]
  (25>22) swap -> [12, 22, 25, 11, 64]
  (25>11) swap -> [12, 22, 11, 25, 64] <- 25 in position

Passes 3 & 4 continue... Final sorted: [11, 12, 22, 25, 64]`,
    resources: [
      {
        title: "Isaac Computer Science — Algorithms",
        url: "https://isaaccomputerscience.org/topics/algorithms",
        description:
          "Comprehensive IB-aligned lessons on pseudocode, sorting, searching, and flowcharts with interactive exercises.",
        type: "website",
      },
      {
        title: "VisuAlgo — Sorting and Searching Visualisations",
        url: "https://visualgo.net/en/sorting",
        description:
          "Step-by-step animated visualisations of bubble sort, selection sort, insertion sort, binary search — essential for understanding.",
        type: "website",
      },
      {
        title: "Khan Academy — Algorithms",
        url: "https://www.khanacademy.org/computing/computer-science/algorithms",
        description:
          "In-depth video series on binary search, sorting algorithms, and algorithm analysis with interactive exercises.",
        type: "video",
      },
      {
        title: "BBC Bitesize — Algorithms and Flowcharts",
        url: "https://www.bbc.co.uk/bitesize/guides/z3bq7ty/revision/1",
        description:
          "Clear revision of flowchart symbols, pseudocode, linear and binary search, and common sorting algorithms.",
        type: "website",
      },
      {
        title: "Oxford IB Computer Science — Wajan Langfield (B.1 Algorithms)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "IB-specific algorithm content with pseudocode, trace tables, and exam-style questions across all difficulty levels.",
        type: "textbook",
      },
    ],
  },

  "B.1.3": {
    conceptExplanation: `**Algorithm efficiency** describes how the resource requirements (time and memory) of an algorithm grow as the size of the input grows. Choosing an efficient algorithm is critical in real applications — an inefficient algorithm that takes 1 second on 100 items may take 27 hours on 1 million items.

**Big O Notation** expresses the worst-case growth rate of an algorithm's time requirement as a function of input size n. It ignores constants and lower-order terms, focusing on the *dominant growth behaviour*. "O" stands for "Order of magnitude."

**Common Complexity Classes:**

**O(1) — Constant time.** The algorithm takes the same time regardless of input size. No matter how large the array, the operation finishes in one step.
Examples: accessing an array by index (arr[i]), checking if a stack is empty, dictionary lookup by key.

**O(log n) — Logarithmic time.** The algorithm halves the problem size at each step. Even for n = 1,000,000,000, it takes only about 30 steps (log2 1,000,000,000 approx 30). Extraordinarily efficient.
Examples: binary search, searching a balanced binary search tree.

**O(n) — Linear time.** The algorithm must examine each element at least once. Doubling the input doubles the time.
Examples: linear search through an unsorted list, printing all items in a list, summing an array.

**O(n log n) — Linearithmic time.** Between linear and quadratic. The most efficient possible for comparison-based sorting.
Examples: merge sort, quicksort (average case), heapsort.

**O(n²) — Quadratic time.** A nested loop where for each element, you examine every other element. Doubling input size quadruples the time. Impractically slow for large datasets.
Examples: bubble sort, selection sort, insertion sort (worst case), checking all pairs of elements.

**O(2ⁿ) — Exponential time.** Each additional input doubles the number of operations. Completely intractable for large n.
Examples: finding all subsets of a set, naive Fibonacci without memoisation.

**Space Complexity** measures memory usage growth with input size. Often there is a time-space trade-off — you can make an algorithm faster by using more memory (caching/memoisation), or save memory at the cost of speed.

**Why It Matters — Practical Impact:**
Sorting 1,000 elements:
- O(n²): ~1,000,000 operations — almost instant
- O(n log n): ~10,000 operations — even more instant

Sorting 1,000,000 elements:
- O(n²): ~1,000,000,000,000 (1 trillion) operations — impractically slow
- O(n log n): ~20,000,000 operations — completes quickly

This is why Google, Facebook, and Netflix invest enormously in algorithmic efficiency — even a small improvement in Big O across billions of operations saves enormous amounts of time and energy.`,
    keyTerms: [
      {
        term: "Big O Notation",
        definition:
          "A mathematical notation expressing the worst-case growth rate of an algorithm's time or space requirements as a function of input size n.",
      },
      {
        term: "Time Complexity",
        definition:
          "A measure of how the number of operations an algorithm requires grows as the input size n increases.",
      },
      {
        term: "Space Complexity",
        definition:
          "A measure of how the amount of memory an algorithm requires grows as the input size n increases.",
      },
      {
        term: "O(1)",
        definition:
          "Constant time complexity — the algorithm's runtime does not grow with input size. E.g., array index access.",
      },
      {
        term: "O(log n)",
        definition:
          "Logarithmic time complexity — the runtime grows very slowly; problem size is halved at each step. E.g., binary search.",
      },
      {
        term: "O(n)",
        definition:
          "Linear time complexity — runtime grows proportionally to input size. E.g., linear search.",
      },
      {
        term: "O(n²)",
        definition:
          "Quadratic time complexity — runtime grows proportionally to the square of input size. E.g., bubble sort.",
      },
      {
        term: "O(n log n)",
        definition:
          "Linearithmic time complexity — the optimal complexity for comparison-based sorting. E.g., merge sort.",
      },
      {
        term: "Worst-Case Complexity",
        definition:
          "The maximum number of operations an algorithm could require for any input of size n; what Big O notation describes.",
      },
      {
        term: "Time-Space Trade-off",
        definition:
          "The common situation where you can reduce an algorithm's time complexity by using more memory (or vice versa).",
      },
    ],
    workedExample: `**Comparing Algorithms: Searching 1,000 Elements**

Scenario: Find a target value in a sorted list of n=1,000 elements.

Linear Search O(n):
  Worst case: 1,000 comparisons
  Example: target is not in the list
  Steps: check index 0, 1, 2, ... 999 -> 1,000 checks

Binary Search O(log n):
  Worst case: log2(1000) approx 10 comparisons!
  Step 1: check index 500 — too high? -> search [0..499]
  Step 2: check index 250 — too low? -> search [251..499]
  Step 3: check index 375 — too high? -> search [251..374]
  ... (continues halving) ...
  Step 10: found or confirmed not present

Difference: 1,000 vs 10 operations — 100 times faster!

---

**Bubble Sort vs Merge Sort at Scale:**

| n (elements) | Bubble Sort O(n^2) | Merge Sort O(n log n) | Faster by  |
|--------------|--------------------|-----------------------|------------|
| 100          | 10,000 ops         | ~664 ops              | ~15 times  |
| 10,000       | 100,000,000 ops    | ~132,877 ops          | ~753 times |
| 1,000,000    | 10^12 ops          | ~19,931,568 ops       | ~50,000x   |

For n=1,000,000 items, bubble sort is 50,000x slower than merge sort.
At 1 billion operations per second:
  Bubble Sort: ~16 minutes
  Merge Sort: ~0.02 seconds

---

**Big O Growth Rate Comparison:**

n=10:    O(1)=1, O(log n)=3, O(n)=10, O(n log n)=33, O(n^2)=100
n=100:   O(1)=1, O(log n)=7, O(n)=100, O(n log n)=664, O(n^2)=10,000
n=1,000: O(1)=1, O(log n)=10, O(n)=1,000, O(n log n)=9,966, O(n^2)=1,000,000`,
    hlExtension: `**HL Extension — Merge Sort and O(n log n) Derivation:**

Merge Sort is a divide-and-conquer algorithm that achieves O(n log n).

Algorithm:
  1. DIVIDE: Split the array in half recursively until all sublists have 1 element
  2. CONQUER: A list of 1 element is trivially sorted
  3. COMBINE: Merge sorted sublists by repeatedly picking the smaller front element

Example — sorting [38, 27, 43, 3, 9, 82, 10]:
  Divide:  [38,27,43,3] and [9,82,10]
  Divide:  [38,27] [43,3] and [9,82] [10]
  Divide:  [38][27] [43][3] and [9][82] [10]
  Merge:   [27,38] [3,43] and [9,82] [10]
  Merge:   [3,27,38,43] and [9,10,82]
  Merge:   [3,9,10,27,38,43,82] Sorted!

Why O(n log n)?
  - There are log2(n) levels of division (we halve log n times)
  - At each level, we do O(n) work total across all merge operations
  - Total: O(n) x O(log n) = O(n log n)

Comparison of sort algorithms:

| Algorithm      | Best      | Average   | Worst     | Space  | Stable? |
|----------------|-----------|-----------|-----------|--------|---------|
| Bubble Sort    | O(n)      | O(n^2)    | O(n^2)    | O(1)   | Yes     |
| Selection Sort | O(n^2)    | O(n^2)    | O(n^2)    | O(1)   | No      |
| Insertion Sort | O(n)      | O(n^2)    | O(n^2)    | O(1)   | Yes     |
| Merge Sort     | O(n logn) | O(n logn) | O(n logn) | O(n)   | Yes     |
| Quicksort      | O(n logn) | O(n logn) | O(n^2)    | O(logn)| No      |

Stable = equal elements preserve their original relative order.`,
    resources: [
      {
        title: "Khan Academy — Asymptotic Notation (Big O)",
        url: "https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation",
        description:
          "Thorough visual explanation of Big O notation with worked examples and exercises.",
        type: "video",
      },
      {
        title: "Isaac Computer Science — Algorithm Efficiency",
        url: "https://isaaccomputerscience.org/topics/algorithms",
        description:
          "IB-aligned content on time complexity, Big O notation, and comparing sorting algorithm efficiencies.",
        type: "website",
      },
      {
        title: "VisuAlgo — Sorting Algorithm Visualiser",
        url: "https://visualgo.net/en/sorting",
        description:
          "Interactive, animated step-by-step visualisations of all major sorting algorithms — see the efficiency difference visually.",
        type: "website",
      },
      {
        title:
          "Oxford IB Computer Science — Algorithm Complexity (Wajan Langfield)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "IB-specific Big O coverage with sorting algorithm comparisons and HL merge sort derivation.",
        type: "textbook",
      },
    ],
  },

  // ─── B.2 Programming ─────────────────────────────────────────────────────────

  "B.2.1": {
    conceptExplanation: `Programming is the process of writing precise instructions that a computer can execute. Python is the primary language used in IB CS practical work, and you must also understand IB pseudocode equivalents.

**Data Types** define what kind of value a variable holds:
- **Integer (int):** Whole numbers, positive or negative. age = 17, score = -5
- **Float (float):** Decimal numbers. gpa = 3.85, temperature = -12.5
- **String (str):** Sequence of characters in quotes. name = "Alice", greeting = 'Hello!'
- **Boolean (bool):** Logical value, either True or False. is_logged_in = True
- **None:** Represents the absence of a value. result = None

**Variables and Constants:** A variable is a named location in memory that stores a value. The value can change. Constants are variables whose value should not change (Python uses UPPER_CASE by convention, e.g., MAX_SIZE = 100).

**Operators:**
- Arithmetic: + - * / (division always returns float), // (floor division), % (modulo/remainder), ** (exponentiation)
- Comparison: == != < > <= >= (all return Boolean)
- Logical: and, or, not (combine Boolean expressions)
- Assignment: = assigns, +=, -=, *= shorthand update operators

**Conditional Statements (Selection):** Allow programs to make decisions based on conditions.
if condition: ... elif condition: ... else:
Only the first condition that is True executes its block. elif and else are optional.

**Loops (Iteration):** Allow code to repeat.
- **for loop:** Iterates over a sequence (list, range, string). Use when you know how many times to repeat.
- **while loop:** Repeats as long as a condition is True. Risk: Infinite loop if the condition never becomes False — always ensure the loop variable changes each iteration.
- **range(start, stop, step):** Generates integers from start (inclusive) to stop (exclusive).
- **break:** Exits the loop immediately.
- **continue:** Skips the rest of the current iteration and moves to the next.

**Nested Structures:** Loops inside loops (nested loops) are used for 2D problems (matrices, tables). Note: nested loops multiply complexity — a double nested loop over n items is O(n²).

**IB Pseudocode Equivalents:**
- Python if/elif/else -> IB IF/ELSE IF/ELSE/END IF
- Python for i in range(1, n+1): -> IB FOR I = 1 TO N ... END FOR
- Python while condition: -> IB WHILE condition DO ... END WHILE
- Python print(x) -> IB OUTPUT X
- Python x = input() -> IB INPUT X`,
    keyTerms: [
      {
        term: "Data Type",
        definition:
          "A classification specifying what kind of value a variable holds and what operations can be performed on it (int, float, str, bool).",
      },
      {
        term: "Variable",
        definition:
          "A named memory location that stores a value which can be read and modified during program execution.",
      },
      {
        term: "Assignment",
        definition:
          "Storing a value into a variable using the assignment operator (= in Python, := in IB pseudocode).",
      },
      {
        term: "Arithmetic Operator",
        definition:
          "Symbols that perform mathematical operations: + - * / (division) // (floor division) % (modulo) ** (power).",
      },
      {
        term: "Conditional Statement",
        definition:
          "A programming construct (if/elif/else) that executes different code blocks depending on whether conditions are True or False.",
      },
      {
        term: "For Loop",
        definition:
          "An iteration structure that repeats a block of code for each item in a sequence or a fixed number of times.",
      },
      {
        term: "While Loop",
        definition:
          "An iteration structure that repeats a block of code as long as a specified condition remains True.",
      },
      {
        term: "Modulo (%)",
        definition:
          "The remainder after integer division. E.g., 17 % 5 = 2. Useful for detecting even/odd numbers and cycling patterns.",
      },
      {
        term: "Boolean",
        definition:
          "A data type with only two values: True or False. The result of all comparison and logical operations.",
      },
      {
        term: "Nested Loop",
        definition:
          "A loop contained inside another loop. For each iteration of the outer loop, the inner loop completes all its iterations. Used for 2D structures.",
      },
    ],
    workedExample: `**Python Grade Calculator with if/elif/else:**

# Grade calculator: demonstrates data types, operators, and control structures

score = float(input("Enter your score (0-100): "))

if score < 0 or score > 100:
    print("Invalid score. Must be between 0 and 100.")
elif score >= 80:
    grade = "7"   # IB grading scale: 7 is highest
    print(f"Score: {score:.1f} -> Grade: {grade} (Excellent!)")
elif score >= 70:
    grade = "6"
    print(f"Score: {score:.1f} -> Grade: {grade} (Very Good)")
elif score >= 60:
    grade = "5"
    print(f"Score: {score:.1f} -> Grade: {grade} (Good)")
elif score >= 50:
    grade = "4"
    print(f"Score: {score:.1f} -> Grade: {grade} (Satisfactory)")
elif score >= 40:
    grade = "3"
    print(f"Score: {score:.1f} -> Grade: {grade} (Mediocre)")
elif score >= 30:
    grade = "2"
    print(f"Score: {score:.1f} -> Grade: {grade} (Poor)")
else:
    grade = "1"
    print(f"Score: {score:.1f} -> Grade: {grade} (Very poor)")

# for loop example: multiplication table
for i in range(1, 11):
    print(f"{score:.0f} x {i} = {score * i:.0f}")

# while loop example: countdown
countdown = 5
while countdown > 0:
    print(f"Countdown: {countdown}")
    countdown -= 1   # crucial: update variable to avoid infinite loop
print("Done!")

---

IB pseudocode equivalent (grade check):
  INPUT SCORE
  IF SCORE >= 80 THEN
    OUTPUT "Grade 7"
  ELSE IF SCORE >= 70 THEN
    OUTPUT "Grade 6"
  ELSE
    OUTPUT "Grade below 6"
  END IF`,
    resources: [
      {
        title: "Python.org Official Documentation — Tutorial",
        url: "https://docs.python.org/3/tutorial/",
        description:
          "The official Python tutorial — covers variables, data types, operators, conditionals, and loops with clear examples.",
        type: "official",
      },
      {
        title: "Khan Academy — Intro to Python",
        url: "https://www.khanacademy.org/computing/intro-to-python-fundamentals",
        description:
          "Interactive Python course covering variables, operators, conditionals, and loops with in-browser coding exercises.",
        type: "video",
      },
      {
        title: "BBC Bitesize — Programming Concepts",
        url: "https://www.bbc.co.uk/bitesize/guides/zkwndmn/revision/1",
        description:
          "Revision of data types, variables, assignment, selection, and iteration with exam-style questions.",
        type: "website",
      },
      {
        title: "Isaac Computer Science — Programming Fundamentals",
        url: "https://isaaccomputerscience.org/topics/programming_fundamentals",
        description:
          "IB-aligned programming lessons on data types, control flow, and program tracing with exercises.",
        type: "website",
      },
    ],
  },

  "B.2.2": {
    conceptExplanation: `**Functions** are reusable, named blocks of code that perform a specific task. They are fundamental to writing clean, maintainable, and correct programs.

**Why Use Functions? — The DRY Principle**
DRY = Don't Repeat Yourself. If you write the same code three times, you have three places to fix bugs. A function is written once and called from anywhere. Benefits: readability (function names explain intent), testability (test each function independently), reusability (call from multiple places), maintainability (fix bugs in one place).

**Defining Functions in Python:**
def function_name(parameter1, parameter2):
    """Docstring: explains what the function does."""
    # function body
    return result

- **Parameters** are placeholders defined in the function signature.
- **Arguments** are the actual values passed when the function is called.
- **Return value:** return sends a value back to the caller. Without return, the function returns None.
- **Default parameters:** def greet(name, greeting="Hello"): — if no argument given, default is used.

**Scope — LEGB Rule:**
Python looks up variable names in this order: Local -> Enclosing -> Global -> Built-in.
- **Local scope:** Variables defined inside a function — only visible within that function.
- **Global scope:** Variables defined at module level — visible everywhere, but must use global keyword to modify them inside a function.
- Best practice: Avoid modifying global variables inside functions — use parameters and return values instead.

**Recursion** — a function that calls itself as part of its own solution. Every recursive function requires:
1. **Base case:** A condition that stops the recursion and returns a direct answer (no recursive call).
2. **Recursive case:** The function calls itself with a smaller/simpler version of the problem, moving towards the base case.

Without a base case -> infinite recursion -> Python raises RecursionError: maximum recursion depth exceeded.

The **call stack** stores each function call as a frame containing its local variables and return address. Each recursive call adds a frame. When the base case is reached, frames are popped from the stack as each call returns.

**Built-in Modules** extend Python's capabilities:
- import math -> math.sqrt(16), math.pi, math.floor(3.7), math.ceil(3.2)
- import random -> random.randint(1, 6) (dice roll), random.choice([...]), random.shuffle(list)
- from math import sqrt, pi -> use sqrt(9) directly without math. prefix
- import datetime -> date and time operations`,
    keyTerms: [
      {
        term: "Function",
        definition:
          "A named, reusable block of code that performs a specific task, can accept inputs (parameters), and optionally returns a value.",
      },
      {
        term: "Parameter",
        definition:
          "A variable in a function definition that receives a value when the function is called. Defined in the function signature.",
      },
      {
        term: "Argument",
        definition:
          "The actual value passed to a function when it is called, assigned to the corresponding parameter.",
      },
      {
        term: "Return Value",
        definition:
          "The value a function sends back to the caller using the return statement. Without return, a function returns None.",
      },
      {
        term: "Scope",
        definition:
          "The region of a program where a variable name is recognised and accessible. Python uses LEGB: Local, Enclosing, Global, Built-in.",
      },
      {
        term: "Local Variable",
        definition:
          "A variable defined inside a function; only accessible within that function, destroyed when the function returns.",
      },
      {
        term: "Global Variable",
        definition:
          "A variable defined at module level; accessible throughout the module but should not be modified inside functions without the global keyword.",
      },
      {
        term: "Recursion",
        definition:
          "A programming technique where a function calls itself with a simpler version of the problem, working towards a base case.",
      },
      {
        term: "Base Case",
        definition:
          "The condition in a recursive function that stops the recursion and returns a direct, non-recursive answer.",
      },
      {
        term: "Call Stack",
        definition:
          "The data structure that tracks active function calls; each call adds a frame, each return removes one. Overflow causes RecursionError.",
      },
      {
        term: "DRY Principle",
        definition:
          "Don't Repeat Yourself — the design principle that each piece of logic should appear in exactly one place in the codebase.",
      },
    ],
    workedExample: `**Recursive Factorial — With Full Call Stack Trace:**

def factorial(n):
    """
    Compute n! = n x (n-1) x (n-2) x ... x 1
    Base case: 0! = 1 and 1! = 1
    """
    if n <= 1:           # BASE CASE: stop the recursion
        return 1
    else:                # RECURSIVE CASE: call itself with n-1
        return n * factorial(n - 1)

print(factorial(4))   # Output: 24

---

CALL STACK TRACE for factorial(4):

Push: factorial(4) -> 4 * factorial(3)  [waiting...]
  Push: factorial(3) -> 3 * factorial(2)  [waiting...]
    Push: factorial(2) -> 2 * factorial(1) [waiting...]
      Push: factorial(1) -> returns 1 (BASE CASE reached!)
    Pop: factorial(2) -> 2 * 1 = 2, returns 2
  Pop: factorial(3) -> 3 * 2 = 6, returns 6
Pop: factorial(4) -> 4 * 6 = 24, returns 24

Result: 24  (4! = 4 x 3 x 2 x 1 = 24)

---

Module usage examples:
import math
import random

print(math.sqrt(144))    # 12.0
print(math.pi)           # 3.141592653589793
print(math.floor(3.9))   # 3
print(math.ceil(3.1))    # 4
print(math.log(8, 2))    # 3.0  (log base 2 of 8 = 3)

die_roll = random.randint(1, 6)
print(f"Rolled: {die_roll}")

colours = ["red", "green", "blue"]
chosen = random.choice(colours)
print(f"Random colour: {chosen}")`,
    resources: [
      {
        title: "Python.org — Functions Documentation",
        url: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions",
        description:
          "Official Python documentation on defining functions, parameters, default arguments, and scope.",
        type: "official",
      },
      {
        title: "Real Python — Python Scope and the LEGB Rule",
        url: "https://realpython.com/python-scope-legb-rule/",
        description:
          "In-depth tutorial on Python variable scope with clear examples of local, global, and enclosing scopes.",
        type: "website",
      },
      {
        title: "Khan Academy — Functions and Recursion",
        url: "https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/recursion",
        description:
          "Visual explanations of recursive functions, call stacks, and classic recursion problems.",
        type: "video",
      },
      {
        title: "Isaac Computer Science — Functions and Modularity",
        url: "https://isaaccomputerscience.org/topics/programming_fundamentals",
        description:
          "IB-aligned content on functions, parameters, return values, scope, and modular design principles.",
        type: "website",
      },
    ],
  },

  "B.2.3": {
    conceptExplanation: `**File handling** allows programs to persist data beyond the current execution — reading from and writing to files stored on disk. **Error handling** makes programs robust against unexpected situations that would otherwise crash the program.

**Opening Files — The Context Manager:**
Always use Python's with statement for file operations. It guarantees the file is properly closed even if an exception occurs — preventing file corruption and resource leaks.

with open(filename, mode) as file_object:
    # work with file here
    # file is automatically closed when this block exits

**File Open Modes:**
- 'r' — Read (default). File must exist; raises FileNotFoundError otherwise.
- 'w' — Write. Creates the file if it doesn't exist; overwrites if it does.
- 'a' — Append. Creates if needed; adds to end without overwriting existing content.
- 'rb' / 'wb' — Binary read/write. For non-text files (images, audio, executables).
- 'r+' — Read and write without truncating.

**Reading Methods:**
- file.read() — reads the entire file as one string
- file.readline() — reads one line (including the newline character)
- file.readlines() — reads all lines into a list of strings
- for line in file: — iterates line by line (most memory-efficient for large files)

**Writing Methods:**
- file.write(string) — writes a string (does NOT add newline automatically)
- file.writelines(list) — writes all strings in a list

**CSV Files** (Comma-Separated Values) store tabular data as plain text. Python's csv module handles them:
import csv
csv.reader(file) — reads rows as lists
csv.writer(file) — writes lists as rows
csv.DictReader(file) — reads rows as dictionaries (column headers as keys)

**Exception Handling — try/except/else/finally:**
Runtime errors raise exceptions — if unhandled, they crash the program. The try block contains code that might fail; except handles specific error types:
- FileNotFoundError — file does not exist
- ValueError — value is the wrong type (e.g., int("hello"))
- IndexError — list index is out of range
- ZeroDivisionError — division by zero
- KeyError — dictionary key not found

else: runs if NO exception occurred. finally: ALWAYS runs, exception or not — used for cleanup. raise explicitly throws an exception — used for input validation.`,
    keyTerms: [
      {
        term: "File Handling",
        definition:
          "Reading from and writing to files on disk, allowing data to persist between program runs.",
      },
      {
        term: "Context Manager (with)",
        definition:
          "A Python construct (with open(...) as f:) that automatically closes files and releases resources after the block executes.",
      },
      {
        term: "Exception",
        definition:
          "An error event that interrupts normal program flow at runtime. If unhandled, it terminates the program with an error message.",
      },
      {
        term: "try/except",
        definition:
          "A Python construct that attempts risky code in the try block and handles specific exceptions in except blocks to prevent program crashes.",
      },
      {
        term: "FileNotFoundError",
        definition:
          "An exception raised when attempting to open a file that does not exist at the specified path.",
      },
      {
        term: "ValueError",
        definition:
          "An exception raised when a function receives an argument of the right type but an inappropriate value (e.g., int('hello')).",
      },
      {
        term: "finally",
        definition:
          "A block in a try/except statement that always executes, regardless of whether an exception occurred — used for cleanup operations.",
      },
      {
        term: "CSV",
        definition:
          "Comma-Separated Values — a plain text format for tabular data where values in each row are separated by commas.",
      },
      {
        term: "Defensive Programming",
        definition:
          "Writing code that anticipates and gracefully handles all plausible error conditions through validation, exception handling, and clear error messages.",
      },
      {
        term: "raise",
        definition:
          "A Python keyword that explicitly throws an exception, used when a function detects that its inputs are invalid.",
      },
    ],
    workedExample: `**Reading a CSV of Student Scores — Full Error Handling:**

import csv

def compute_class_average(filename):
    """
    Reads a CSV file of student scores and returns the class average.
    CSV format: Name,Score  (e.g., "Alice,85")
    Returns None if file cannot be read or contains no valid scores.
    """
    scores = []

    try:
        with open(filename, 'r') as csvfile:
            reader = csv.DictReader(csvfile)   # first row = header
            for row_number, row in enumerate(reader, start=2):
                try:
                    score = float(row['Score'])
                    if not (0 <= score <= 100):
                        raise ValueError(f"Score out of range: {score}")
                    scores.append(score)
                except ValueError as e:
                    print(f"Warning: row {row_number} skipped: {e}")
                except KeyError:
                    print(f"Warning: row {row_number} missing 'Score' column")

    except FileNotFoundError:
        print(f"Error: File '{filename}' not found.")
        return None
    except PermissionError:
        print(f"Error: Cannot read '{filename}' — permission denied.")
        return None
    else:
        print(f"Successfully read {len(scores)} scores from {filename}")
    finally:
        print("File operation complete.")

    if not scores:
        print("No valid scores found.")
        return None

    return round(sum(scores) / len(scores), 2)

# Usage:
result = compute_class_average("class_scores.csv")
if result is not None:
    print(f"Class average: {result}")

# Sample CSV file (class_scores.csv):
# Name,Score
# Alice,85
# Bob,72
# Chloe,abc     <- ValueError, skipped with warning
# David,91
# Eve,-5         <- out of range, skipped
# Output: Class average: 82.67`,
    resources: [
      {
        title: "Python.org — Reading and Writing Files",
        url: "https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files",
        description:
          "Official Python documentation on file handling, open modes, context managers, and file methods.",
        type: "official",
      },
      {
        title: "Real Python — Python Exceptions: An Introduction",
        url: "https://realpython.com/python-exceptions/",
        description:
          "Comprehensive guide to Python exception handling: try/except/else/finally, raising exceptions, and best practices.",
        type: "website",
      },
      {
        title: "Real Python — Reading and Writing CSV Files",
        url: "https://realpython.com/python-csv/",
        description:
          "Complete tutorial on working with CSV files in Python using the csv module, DictReader, and DictWriter.",
        type: "website",
      },
      {
        title: "Isaac Computer Science — File Handling and Errors",
        url: "https://isaaccomputerscience.org/topics/programming_fundamentals",
        description:
          "IB-aligned content on file operations and exception handling with exam-style questions.",
        type: "website",
      },
    ],
  },

  "B.2.4": {
    conceptExplanation: `**Collections** are data structures that store multiple values. Choosing the right collection type dramatically affects code clarity and performance.

**Lists** are ordered, mutable sequences. The most versatile Python collection.
- Create: scores = [85, 72, 91, 68, 77]
- Index: scores[0] = 85 (first), scores[-1] = 77 (last)
- Slice: scores[1:4] = [72, 91, 68] (index 1, 2, 3 — NOT 4)
- Slice with step: scores[::2] = every other element
- Mutate: scores.append(95), scores.insert(2, 80), scores.remove(68), scores.pop() (removes and returns last)
- Sort: scores.sort() (in-place), sorted(scores) (returns new sorted list)
- Length: len(scores)
- **List comprehension:** [x*2 for x in scores if x > 70] — concisely replaces filter loops.

**Dictionaries** store key-value pairs for fast O(1) lookup by key. Keys must be unique and immutable (strings, numbers, tuples). Values can be anything.
- Create: student = {"name": "Alice", "grade": 7, "scores": [85, 92]}
- Access: student["name"] (raises KeyError if missing), student.get("age", "N/A") (safe default)
- Update: student["grade"] = 6
- Iterate: for key, value in student.items():, student.keys(), student.values()
- Delete: del student["grade"], student.pop("grade")

**Sets** store unique, unordered elements. Automatically eliminate duplicates. O(1) membership testing.
- Create: unique_scores = {85, 72, 91, 85} -> stores {72, 85, 91} (duplicates removed)
- Set operations: a | b (union), a & b (intersection), a - b (difference)
- Test: 85 in unique_scores -> True

**Tuples** are ordered, immutable sequences. Once created, cannot be changed. Use when data should not be modified (coordinates, RGB colours, function returning multiple values).
- Create: coordinates = (51.5, -0.12)
- Access: coordinates[0], tuple unpacking: lat, lon = coordinates

**2D Lists (Matrices):** A list of lists. Access with matrix[row][col].
- Common for grids, game boards, spreadsheet-like data.

**When to Use Which:**
- **List:** ordered sequence that changes (a shopping cart, exam results to sort/filter)
- **Dictionary:** fast lookup by a meaningful key (a student database, word frequency count)
- **Set:** membership testing, removing duplicates (checking if a username exists)
- **Tuple:** fixed record that should not change (a 2D coordinate, a named constant group)`,
    keyTerms: [
      {
        term: "List",
        definition:
          "An ordered, mutable Python collection that stores elements by index. Allows duplicates. Syntax: [a, b, c].",
      },
      {
        term: "Indexing",
        definition:
          "Accessing a single element in a sequence using its position. Python uses 0-based indexing; -1 accesses the last element.",
      },
      {
        term: "Slicing",
        definition:
          "Extracting a sub-sequence from a list or string using [start:stop:step] notation; stop index is exclusive.",
      },
      {
        term: "List Comprehension",
        definition:
          "A concise Python syntax for creating lists: [expression for item in iterable if condition].",
      },
      {
        term: "Dictionary",
        definition:
          "An unordered Python collection of key-value pairs with O(1) lookup by key. Keys must be unique and immutable.",
      },
      {
        term: "Set",
        definition:
          "An unordered Python collection of unique elements. Automatically removes duplicates. Supports fast membership testing and set operations.",
      },
      {
        term: "Tuple",
        definition:
          "An ordered, immutable Python sequence. Once created, elements cannot be changed. Used for fixed data records.",
      },
      {
        term: "2D List",
        definition:
          "A list of lists, used to represent a matrix or grid. Elements accessed with [row][col] notation.",
      },
      {
        term: "Mutable",
        definition:
          "An object that can be modified after creation. Lists and dictionaries are mutable; strings and tuples are not.",
      },
      {
        term: "Immutable",
        definition:
          "An object that cannot be changed after creation. Strings, numbers, and tuples are immutable in Python.",
      },
    ],
    workedExample: `**Student Gradebook — Dictionary of Lists:**

gradebook = {
    "Alice":  [85, 92, 78, 95, 88],
    "Bob":    [72, 65, 80, 70, 68],
    "Chloe":  [91, 95, 89, 93, 97],
    "David":  [55, 62, 58, 70, 65],
    "Eve":    [78, 84, 80, 77, 82],
}

# 1. Each student's average score
print("--- Student Averages ---")
for student, scores in gradebook.items():
    avg = sum(scores) / len(scores)
    print(f"{student}: {avg:.1f}")

# Output:
# Alice: 87.6
# Bob:   71.0
# Chloe: 93.0
# David: 62.0
# Eve:   80.2

# 2. Compute class average using a list comprehension
all_scores = [score for scores in gradebook.values() for score in scores]
class_avg = sum(all_scores) / len(all_scores)
print(f"\nClass average: {class_avg:.1f}")   # 78.76

# 3. Find top scorer
best = max(gradebook, key=lambda name: sum(gradebook[name])/len(gradebook[name]))
print(f"Top student: {best}")  # Chloe

# 4. Students above class average (list comprehension + filter)
stars = [name for name, scores in gradebook.items()
         if sum(scores)/len(scores) > class_avg]
print(f"Above average: {stars}")  # ['Alice', 'Chloe', 'Eve']

# 5. 2D list: a 3x3 Noughts and Crosses board
board = [[" ", " ", " "],
         [" ", " ", " "],
         [" ", " ", " "]]
board[0][0] = "X"   # top-left
board[1][1] = "O"   # centre
board[2][2] = "X"   # bottom-right
for row in board:
    print("|".join(row))
# Output:
# X| |
#  |O|
#  | |X`,
    resources: [
      {
        title: "Python.org — Data Structures (Lists, Dicts, Sets, Tuples)",
        url: "https://docs.python.org/3/tutorial/datastructures.html",
        description:
          "Official Python documentation with complete coverage of all built-in collection types and their operations.",
        type: "official",
      },
      {
        title: "Khan Academy — Lists in Python",
        url: "https://www.khanacademy.org/computing/intro-to-python-fundamentals/x57fbb517:lists-arrays",
        description:
          "Interactive lessons on Python lists, indexing, slicing, and common list operations.",
        type: "video",
      },
      {
        title: "Isaac Computer Science — Arrays and Collections",
        url: "https://isaaccomputerscience.org/topics/programming_fundamentals",
        description:
          "IB-aligned content on arrays/lists and dictionaries with exam-style coding questions.",
        type: "website",
      },
      {
        title: "BBC Bitesize — Arrays and Data Structures",
        url: "https://www.bbc.co.uk/bitesize/guides/zy9thyc/revision/1",
        description:
          "Clear revision on 1D and 2D arrays, searching and sorting collections, and record structures.",
        type: "website",
      },
      {
        title: "Oxford IB Computer Science — Collections (Wajan Langfield)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "IB-specific coverage of arrays, lists, and dictionaries with IB exam command term questions.",
        type: "textbook",
      },
    ],
  },

  // ─── B.3 Object-Oriented Programming ─────────────────────────────────────────

  "B.3.1": {
    conceptExplanation: `**Object-Oriented Programming (OOP)** is a programming paradigm that organises code around *objects* — entities that combine data (attributes) and behaviour (methods) in a single unit. OOP models the real world: a bank account, a student, a car are all objects with properties and actions.

**OOP vs Procedural Programming:**
- **Procedural:** Program is a sequence of functions operating on separate data. Data and functions are independent. Good for simple scripts, hard to manage at scale.
- **OOP:** Data and the functions that operate on it are bundled together into *classes*. Models real-world entities naturally. Scales well for large, complex systems.

**Class vs Object:**
- A **class** is a blueprint or template that defines the structure and behaviour of a type of object.
- An **object** (or instance) is a specific realisation of a class, created with actual values.
- Analogy: a class is like an architectural drawing; an object is a building constructed from that drawing. Many buildings can be made from one drawing.

**Defining a Class in Python:**
class ClassName:
    """Class docstring."""
    class_variable = value          # shared by all instances
    def __init__(self, param1):     # constructor
        self.instance_var = param1  # instance variable
    def method_name(self):          # instance method
        # method body

**The __init__ Constructor** is called automatically when an object is created. It initialises the object's attributes. self is a reference to the current object.

**Instance Variables** (self.x) are unique to each object — each instance has its own copy. **Class Variables** are shared across ALL instances of the class.

**Methods** are functions defined inside a class. The first parameter is always self, which refers to the calling object.

**UML Class Diagram Notation:**
- Box divided into three sections: top = class name; middle = attributes with types; bottom = methods with return types
- Visibility: + (public), - (private), # (protected)
- Format: +attribute: Type, +method(param: Type): ReturnType`,
    keyTerms: [
      {
        term: "Object-Oriented Programming (OOP)",
        definition:
          "A programming paradigm that organises code into objects combining data (attributes) and behaviour (methods), modelling real-world entities.",
      },
      {
        term: "Class",
        definition:
          "A blueprint or template defining the attributes and methods that all objects of that type will have.",
      },
      {
        term: "Object",
        definition:
          "A specific instance of a class, created with actual values. Each object has its own copy of the instance variables.",
      },
      {
        term: "Instantiation",
        definition:
          "The process of creating an object from a class: obj = ClassName(arguments).",
      },
      {
        term: "__init__ (Constructor)",
        definition:
          "A special Python method called automatically when an object is created; used to initialise the object's instance variables.",
      },
      {
        term: "self",
        definition:
          "A reference to the current object instance, used as the first parameter in all instance methods to access the object's attributes and methods.",
      },
      {
        term: "Instance Variable",
        definition:
          "An attribute defined with self. in __init__ — each object has its own independent copy.",
      },
      {
        term: "Class Variable",
        definition:
          "An attribute defined at class level (not inside __init__) — shared by all instances of the class.",
      },
      {
        term: "Method",
        definition:
          "A function defined inside a class that operates on the object's data. Always receives self as the first parameter.",
      },
      {
        term: "UML Class Diagram",
        definition:
          "A visual notation for representing classes with their attributes, methods, and visibility (+public, -private, #protected).",
      },
    ],
    workedExample: `**BankAccount Class — Python Implementation and UML Diagram:**

class BankAccount:
    """Models a bank account with deposit and withdraw operations."""
    interest_rate = 0.03   # class variable: shared by all accounts

    def __init__(self, owner, initial_balance=0):
        self.owner = owner                 # public instance variable
        self.__balance = initial_balance   # private (double underscore)
        self.transaction_count = 0

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit amount must be positive")
        self.__balance += amount
        self.transaction_count += 1
        print(f"Deposited {amount}. New balance: {self.__balance}")

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Withdrawal must be positive")
        if amount > self.__balance:
            raise ValueError("Insufficient funds")
        self.__balance -= amount
        self.transaction_count += 1

    def get_balance(self):   # getter — read-only access
        return self.__balance

    def __str__(self):       # string representation
        return f"Account({self.owner}, Balance: {self.__balance})"

# Two SEPARATE objects from ONE class:
account1 = BankAccount("Alice", 1000)
account2 = BankAccount("Bob", 500)
account1.deposit(250)       # Alice: 1250
account2.deposit(100)       # Bob: 600
print(account1)             # Account(Alice, Balance: 1250)
print(account2)             # Account(Bob, Balance: 600)
# account1.__balance -> AttributeError (private!)

---

UML Class Diagram for BankAccount:

+----------------------------------+
|          BankAccount             |
+----------------------------------+
| +interest_rate: float            |
| +owner: str                      |
| -balance: float                  |
| +transaction_count: int          |
+----------------------------------+
| +__init__(owner, balance): void  |
| +deposit(amount: float): void    |
| +withdraw(amount: float): void   |
| +get_balance(): float            |
+----------------------------------+`,
    resources: [
      {
        title: "Isaac Computer Science — Object-Oriented Programming",
        url: "https://isaaccomputerscience.org/topics/object_oriented_programming",
        description:
          "Full IB-aligned OOP lessons: classes, objects, attributes, methods, and constructors with exam questions.",
        type: "website",
      },
      {
        title: "Khan Academy — Object-Oriented Design",
        url: "https://www.khanacademy.org/computing/computer-science/programming",
        description:
          "Visual lessons on OOP concepts: classes, objects, encapsulation, and inheritance.",
        type: "video",
      },
      {
        title: "Real Python — Python Classes: The Power of OOP",
        url: "https://realpython.com/python3-object-oriented-programming/",
        description:
          "Comprehensive Python OOP tutorial with classes, instances, methods, inheritance, and practical examples.",
        type: "website",
      },
      {
        title: "Oxford IB Computer Science — OOP Chapter (Wajan Langfield)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "IB-specific OOP coverage: classes, UML, encapsulation, inheritance, polymorphism with exam-style questions.",
        type: "textbook",
      },
    ],
  },

  "B.3.2": {
    conceptExplanation: `The three fundamental principles of OOP beyond classes and objects are **encapsulation**, **inheritance**, and **polymorphism**. Together they make code more reusable, maintainable, and extensible.

**Encapsulation** bundles an object's data and the methods that work on that data together, and controls external access to the internal state.

Why it matters: if external code can directly modify an object's attributes, bugs become impossible to track. Encapsulation forces all changes through controlled methods that can validate input.

Python's access control conventions:
- attribute (no underscore): public — accessible anywhere
- _attribute (single underscore): protected by convention
- __attribute (double underscore): private — Python performs *name mangling*, renaming it to _ClassName__attribute, preventing accidental access from outside

**Inheritance** allows a new class (subclass/child) to inherit all the attributes and methods of an existing class (superclass/parent), then add or override as needed. This models "is-a" relationships: a Dog IS-A Animal.

- class Dog(Animal): — Dog inherits from Animal
- The child class automatically has all of the parent's attributes and methods
- super().__init__(...) calls the parent class's constructor
- **Method overriding:** The subclass defines a method with the same name as the parent — the subclass version is used instead
- Benefits: reduces code duplication, represents natural hierarchies, extending a class does not affect the parent

**Polymorphism** means "many forms" — the same method name produces different behaviour depending on the object's class. This allows code to work with objects of different types through a common interface.

Example: animal.speak() on a Dog says "Woof!", on a Cat says "Meow!", on a Cow says "Moo!" — the calling code does not need to know the specific type.

Benefits: write generic code that works with any subclass; add new subclasses without changing existing code (Open/Closed Principle).`,
    keyTerms: [
      {
        term: "Encapsulation",
        definition:
          "Bundling an object's data and methods together and controlling access to internal state through access modifiers and getter/setter methods.",
      },
      {
        term: "Inheritance",
        definition:
          "A mechanism where a child class automatically receives all attributes and methods from a parent class, modelling 'is-a' relationships.",
      },
      {
        term: "Polymorphism",
        definition:
          "The ability for objects of different classes to respond to the same method call with different behaviour, enabling generic code.",
      },
      {
        term: "Superclass / Parent Class",
        definition:
          "The class being inherited from; provides common attributes and methods to all its subclasses.",
      },
      {
        term: "Subclass / Child Class",
        definition:
          "A class that inherits from a parent class; can extend or override inherited attributes and methods.",
      },
      {
        term: "Method Overriding",
        definition:
          "Defining a method in a subclass with the same name as one in the parent class, replacing the parent's implementation for that type.",
      },
      {
        term: "super()",
        definition:
          "A Python function that returns a proxy of the parent class, used to call the parent's __init__ or other methods from within a subclass.",
      },
      {
        term: "Private Attribute",
        definition:
          "An attribute prefixed with __ (double underscore) in Python; name-mangled to prevent access from outside the class.",
      },
      {
        term: "Name Mangling",
        definition:
          "Python's mechanism for __private attributes: renamed to _ClassName__attribute, making them harder to access externally.",
      },
      {
        term: "is-a Relationship",
        definition:
          "The inheritance relationship: a Dog IS-A Animal means Dog should inherit from Animal.",
      },
    ],
    workedExample: `**Animal Hierarchy — Inheritance and Polymorphism:**

class Animal:
    def __init__(self, name, age):
        self.name = name      # public
        self._age = age       # protected by convention

    def speak(self):
        return "..."          # overridden by subclasses

    def describe(self):
        return f"{self.name} says: {self.speak()}"


class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age)   # call parent's __init__
        self.breed = breed

    def speak(self):           # METHOD OVERRIDE
        return "Woof!"

    def fetch(self):
        return f"{self.name} fetches the ball!"


class Cat(Animal):
    def speak(self):           # METHOD OVERRIDE
        return "Meow!"


class Parrot(Animal):
    def __init__(self, name, age, phrase):
        super().__init__(name, age)
        self.phrase = phrase

    def speak(self):           # METHOD OVERRIDE
        return f"Squawk! {self.phrase}"


# POLYMORPHISM in action — same code works for all animal types:
animals = [
    Dog("Rex", 3, "Labrador"),
    Cat("Whiskers", 5),
    Parrot("Polly", 2, "Pieces of eight!"),
]

for animal in animals:
    print(animal.describe())   # calls CORRECT speak() for each type

# Output:
# Rex says: Woof!
# Whiskers says: Meow!
# Polly says: Squawk! Pieces of eight!

print(animals[0].fetch())  # Rex fetches the ball!
# animals[1].fetch() -> AttributeError: Cat has no fetch method

---

UML Inheritance Diagram:

        +--------Animal---------+
        | +name, #age           |
        | +speak(): str         |
        | +describe(): str      |
        +-----------+-----------+
                    |
          +---------+---------+
          |         |         |
       +--Dog--+ +--Cat--+ +--Parrot--+
       |+breed | |       | | +phrase  |
       |+fetch | |       | |          |
       +-------+ +-------+ +----------+
       (each overrides speak())`,
    hlExtension: `**HL Extension — Abstract Base Classes:**

Abstract Base Classes (ABCs) enforce that subclasses MUST implement certain methods.
An abstract class cannot be instantiated directly — it exists only as a contract for subclasses.

from abc import ABC, abstractmethod

class Shape(ABC):   # abstract base class
    @abstractmethod
    def area(self) -> float:
        pass   # subclasses MUST implement this

    @abstractmethod
    def perimeter(self) -> float:
        pass

    def describe(self):   # concrete method all shapes share
        return f"Area: {self.area():.2f}, Perimeter: {self.perimeter():.2f}"

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        import math
        return math.pi * self.radius ** 2
    def perimeter(self):
        import math
        return 2 * math.pi * self.radius

c = Circle(5)
print(c.describe())   # Area: 78.54, Perimeter: 31.42
# Shape() -> TypeError: Cannot instantiate abstract class

Multiple Inheritance:
class C(A, B):  # C inherits from both A and B
Python uses MRO (Method Resolution Order — C3 linearisation)
to decide which parent method wins when both define the same name.
View with: print(C.__mro__)`,
    resources: [
      {
        title:
          "Isaac Computer Science — OOP: Encapsulation, Inheritance and Polymorphism",
        url: "https://isaaccomputerscience.org/topics/object_oriented_programming",
        description:
          "Comprehensive IB-aligned lessons on the three OOP pillars with Python examples and exam practice.",
        type: "website",
      },
      {
        title: "Real Python — Inheritance and Composition in Python",
        url: "https://realpython.com/inheritance-composition-python/",
        description:
          "In-depth Python tutorial on inheritance, method overriding, super(), and abstract base classes.",
        type: "website",
      },
      {
        title:
          "Oxford IB CS — Encapsulation, Inheritance, Polymorphism (Wajan Langfield)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "IB-specific coverage of all three OOP pillars with UML diagrams and exam-style questions.",
        type: "textbook",
      },
      {
        title: "Khan Academy — Object-Oriented Programming",
        url: "https://www.khanacademy.org/computing/computer-science/programming",
        description:
          "Accessible video series on OOP concepts including encapsulation, inheritance, and polymorphism.",
        type: "video",
      },
    ],
  },

  "B.3.3": {
    conceptExplanation: `**UML (Unified Modelling Language)** is a standardised visual language for designing and documenting software systems. Before writing code, UML diagrams help teams agree on structure, interactions, and requirements. The IB CS syllabus requires three diagram types.

**1. UML Class Diagrams** show the static structure — classes, their attributes, methods, and relationships.

A class box has three sections:
- Top: Class name (bold, centred)
- Middle: Attributes — visibility name: Type
- Bottom: Methods — visibility name(params): ReturnType

Visibility symbols: + (public), - (private), # (protected).

Relationship types:
- **Association (—):** "uses" or "has a reference to". The most general relationship.
- **Aggregation (diamond open —):** "has-a" but the contained object can exist independently. E.g., a Department has Employees; employees still exist if the department is dissolved.
- **Composition (diamond filled —):** strong ownership; the contained object cannot exist without the container. E.g., a House is composed of Rooms; rooms do not exist without the house.
- **Inheritance (hollow triangle arrow):** "is-a" — arrow pointing to the parent class.

Multiplicity notation: 1 (exactly one), 0..* (zero or more), 1..* (one or more), 0..1 (zero or one).

**2. UML Sequence Diagrams** show how objects interact over time.
- Objects as boxes at the top, each with a vertical lifeline (dashed line) extending downwards
- Time flows downward
- Synchronous messages (solid arrow, filled head): caller waits for response
- Asynchronous messages (solid arrow, open head): caller continues without waiting
- Return messages (dashed arrow): the response sent back
- Activation bars (thin rectangles on lifeline): show when an object is active

**3. Use-Case Diagrams** show functional requirements from the user's perspective.
- Actors are stick figures — represent human users or external systems
- Use cases are ovals containing a verb phrase (e.g., "Place Order", "Login")
- System boundary is a rectangle containing all use cases
- <<include>> relationship: one use case always includes another (mandatory)
- <<extend>> relationship: one use case optionally adds behaviour to another (conditional)`,
    keyTerms: [
      {
        term: "UML",
        definition:
          "Unified Modelling Language — a standardised visual notation for designing and documenting software systems.",
      },
      {
        term: "Class Diagram",
        definition:
          "A UML diagram showing classes, their attributes, methods, visibility, and the relationships between them.",
      },
      {
        term: "Sequence Diagram",
        definition:
          "A UML diagram showing how objects interact through messages over time for a specific scenario.",
      },
      {
        term: "Use-Case Diagram",
        definition:
          "A UML diagram showing the functional requirements of a system as interactions between actors and use cases.",
      },
      {
        term: "Association",
        definition:
          "A general UML relationship (—) indicating that one class uses or has a reference to another.",
      },
      {
        term: "Aggregation",
        definition:
          "A UML 'has-a' relationship (open diamond) where the contained object can exist independently of the container.",
      },
      {
        term: "Composition",
        definition:
          "A UML strong ownership relationship (filled diamond) where the contained object cannot exist without the container.",
      },
      {
        term: "Lifeline",
        definition:
          "In a sequence diagram, the vertical dashed line extending from each object, representing its existence over time.",
      },
      {
        term: "Actor",
        definition:
          "In a use-case diagram, a role (stick figure) that interacts with the system — can be a human user or external system.",
      },
      {
        term: "Multiplicity",
        definition:
          "Notation on UML relationship lines indicating the number of instances involved (1, 0..*, 1..*, 0..1).",
      },
    ],
    workedExample: `**School Management System — UML Class Diagram:**

+------------+ 0..*     1..* +----------+
|  Student   |------via------+  Course  |
+------------+  Enrollment   +----------+
| -studentID |               | -courseID|
| +name      | +------------+| +title   |
| +email     | | Enrollment | | +credits|
| #yearGroup | +------------+|          |
+------------+ | -enrollDate|+----+-----+
               | -grade     |     |  (inheritance)
               +-----------+  +--+------+
                               | Elective|
                               +---------+
                               | +topic  |
                               +---------+

+----------+
| Teacher  |
+----------+
| +staffID |
| +name    +-- teaches -- Course (1 teacher, 1..* courses)
| +subject |
+----------+

Key relationships:
  Student and Course are connected via Enrollment (M:N resolved)
  Elective inherits from Course (is-a)
  Teacher teaches Course (association)

Multiplicity:
  One Student can have 0..* Enrollments
  One Course must have 1..* Enrollments
  One Teacher teaches 1..* Courses

---

**Sequence Diagram — Student Login Flow:**

Browser        AuthController      UserDatabase
   |                 |                   |
   |--login(u,pwd)-->|                   |
   |                 |--findUser(usr)---->|
   |                 |<-- user record ----|  
   |                 |--verifyPassword()  |  [self-call]
   |<-- session token|                   |
   |                 |                   |

(Solid arrows = synchronous calls, dashed = return messages)`,
    resources: [
      {
        title: "Isaac Computer Science — UML Diagrams",
        url: "https://isaaccomputerscience.org/topics/object_oriented_programming",
        description:
          "IB-aligned UML content: class, sequence, and use-case diagrams with notation guides and exam questions.",
        type: "website",
      },
      {
        title: "Lucidchart — UML Class Diagram Tutorial",
        url: "https://www.lucidchart.com/pages/uml-class-diagram",
        description:
          "Visual guide to UML class diagram notation, relationship types, and multiplicity with examples.",
        type: "website",
      },
      {
        title: "IBM UML Basics",
        url: "https://developer.ibm.com/articles/an-introduction-to-uml/",
        description:
          "Authoritative introduction to UML from IBM: all major diagram types with notation reference.",
        type: "official",
      },
      {
        title: "Oxford IB CS — UML Chapter (Wajan Langfield)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "Complete UML coverage aligned to IB: class, sequence, and use-case diagrams with exam-style questions.",
        type: "textbook",
      },
    ],
  },

  // ─── B.4 Abstract Data Types (HL Only) ───────────────────────────────────────

  "B.4.1": {
    conceptExplanation: `**Abstract Data Types (ADTs)** define data structures by their *behaviour* (what operations they support) rather than their *implementation* (how they work internally). B.4 is HL-only content requiring deeper understanding of data structure design.

**Stacks — LIFO (Last In, First Out)**
A stack is like a stack of plates — you can only add or remove from the top. The last item added is the first to be removed.

Core operations:
- **push(item):** Add item to the top of the stack
- **pop():** Remove and return the item from the top
- **peek():** Return (but do not remove) the top item
- **isEmpty():** Return True if the stack has no items
- **size():** Return the number of items

Real-world uses of stacks:
- **Function call stack:** Each function call pushes a frame; returning pops it. This is exactly how Python's call stack works for recursion.
- **Undo/Redo:** Each action is pushed; undo pops the last action.
- **Bracket matching:** Push open brackets, pop when closing bracket encountered — if they match, the expression is valid.
- **RPN (Reverse Polish Notation) calculator:** Operators act on the two most recently pushed numbers.
- **Browser back button:** Visited pages are pushed; clicking back pops to the previous page.

**Queues — FIFO (First In, First Out)**
A queue is like a physical queue — the first to join is the first to be served.

Core operations:
- **enqueue(item):** Add item to the rear
- **dequeue():** Remove and return the item from the front
- **isEmpty():** Return True if empty
- **front():** Peek at the front item without removing

Problem with simple array-based queues: after many enqueue/dequeue operations, the front pointer moves forward wasting space at the start. Solution: **circular queue** — when the rear pointer reaches the end, it wraps around to the beginning.

**Priority Queue:** Items have priorities; dequeue always returns the highest-priority item regardless of insertion order.

Real-world uses: print spooler, BFS graph traversal, OS scheduling, hospital emergency triage.

**Linked Lists**
A linked list stores elements as **nodes**, where each node contains data and a **pointer** to the next node. The list is accessed starting from the **head pointer**.

Singly linked: each node points only to the next.
Doubly linked: each node has both a next and a previous pointer.

Linked lists vs arrays:
- **Insertion/deletion O(1)** at a known position (just update pointers) vs arrays O(n) (shift all elements)
- **Access O(n):** Must traverse from head to find element at position i (no random access)
- **Dynamic size:** Grows and shrinks at runtime without needing pre-specified size
- **More memory per element:** Each node stores data plus a pointer (extra overhead)`,
    keyTerms: [
      {
        term: "Abstract Data Type (ADT)",
        definition:
          "A data structure defined by its operations and behaviour rather than its internal implementation.",
      },
      {
        term: "Stack",
        definition:
          "A LIFO (Last In, First Out) abstract data structure where items are added and removed from the same end (the top).",
      },
      {
        term: "Push",
        definition: "The operation that adds an item to the top of a stack.",
      },
      {
        term: "Pop",
        definition:
          "The operation that removes and returns the top item from a stack. Raises an error if the stack is empty.",
      },
      {
        term: "Queue",
        definition:
          "A FIFO (First In, First Out) abstract data structure where items are added at the rear and removed from the front.",
      },
      {
        term: "Enqueue",
        definition: "The operation that adds an item to the rear of a queue.",
      },
      {
        term: "Dequeue",
        definition:
          "The operation that removes and returns the item from the front of a queue.",
      },
      {
        term: "Circular Queue",
        definition:
          "A queue where the rear pointer wraps around to the start of the array when it reaches the end, preventing wasted space.",
      },
      {
        term: "Linked List",
        definition:
          "A dynamic data structure of nodes where each node holds data and a pointer to the next node. No contiguous memory required.",
      },
      {
        term: "Node",
        definition:
          "The basic unit of a linked list, containing a data value and a pointer (reference) to the next node.",
      },
      {
        term: "Head Pointer",
        definition:
          "A reference to the first node of a linked list; the entry point for traversal.",
      },
    ],
    workedExample: `**Python Stack Class — Balanced Bracket Checker:**

class Stack:
    def __init__(self):
        self._items = []   # private: implementation hidden

    def push(self, item):
        self._items.append(item)

    def pop(self):
        if self.is_empty():
            raise IndexError("Stack underflow: cannot pop from empty stack")
        return self._items.pop()

    def peek(self):
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self._items[-1]

    def is_empty(self):
        return len(self._items) == 0

    def size(self):
        return len(self._items)


def is_balanced(expression):
    """Checks if brackets are balanced using a stack."""
    stack = Stack()
    pairs = {')': '(', ']': '[', '}': '{'}

    for char in expression:
        if char in '([{':
            stack.push(char)         # opening bracket: push
        elif char in ')]}':          # closing bracket: match
            if stack.is_empty():
                return False
            if stack.pop() != pairs[char]:
                return False

    return stack.is_empty()  # True only if all matched

print(is_balanced("(a + [b * {c + d}])"))  # True
print(is_balanced("(a + [b * c)"))          # False
print(is_balanced("((("))                   # False

---

Linked List Node Structure:

  HEAD
   v
  [42|->]  ->  [17|->]  ->  [95|->]  ->  [33|None]

Each box = Node(data, next_pointer)
To traverse: start at HEAD, follow .next until None
To insert after node X: new_node.next = X.next; X.next = new_node
To delete node Y (knowing previous node P): P.next = Y.next`,
    resources: [
      {
        title: "VisuAlgo — Stacks, Queues, and Linked Lists",
        url: "https://visualgo.net/en/list",
        description:
          "Interactive animated visualisations of stack push/pop, queue operations, and linked list insert/delete.",
        type: "website",
      },
      {
        title: "Khan Academy — Stacks and Queues",
        url: "https://www.khanacademy.org/computing/computer-science/algorithms",
        description:
          "Clear explanations of LIFO stacks and FIFO queues with use-case examples.",
        type: "video",
      },
      {
        title: "Isaac Computer Science — Abstract Data Types",
        url: "https://isaaccomputerscience.org/topics/abstract_data_types",
        description:
          "IB HL-aligned content on stacks, queues, and linked lists with exam questions and Python implementations.",
        type: "website",
      },
      {
        title: "Oxford IB CS — ADTs Chapter (Wajan Langfield)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "In-depth HL coverage of stacks, queues, and linked lists with IB exam-style questions and diagrams.",
        type: "textbook",
      },
      {
        title:
          "Introduction to Algorithms — CLRS (Cormen, Leiserson, Rivest, Stein)",
        url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/",
        description:
          "The definitive algorithms textbook — Chapters 10-12 cover stacks, queues, linked lists, and trees rigorously.",
        type: "textbook",
      },
    ],
  },

  "B.4.2": {
    conceptExplanation: `**Trees** and **graphs** are non-linear data structures that model hierarchical and networked relationships.

**Binary Trees:**
A binary tree consists of **nodes** where each node has at most two children: a **left child** and a **right child**. The topmost node is the **root**. Nodes with no children are **leaves**.

Key terminology:
- **Height:** The number of edges on the longest path from root to a leaf.
- **Depth** of a node: The number of edges from the root to that node.
- **Complete tree:** Every level is fully filled except possibly the last, filled left to right.
- **Full tree:** Every node has either 0 or 2 children.

**Binary Search Tree (BST):**
A binary tree with the **ordering property:** for any node, ALL values in its left subtree are less than the node's value, and ALL values in its right subtree are greater.

BST operations:
- **Search:** Compare target with current node; go left if smaller, right if larger. O(log n) average for balanced BST, O(n) worst case (degenerate).
- **Insert:** Search for the correct position; insert when you reach None.
- **Delete:** Three cases: (1) leaf — simply remove; (2) one child — replace with that child; (3) two children — replace with in-order successor (smallest value in right subtree).

**BST Traversals** visit all nodes in different orders:
- **In-order (Left-Root-Right):** Visits nodes in ascending sorted order — the most useful traversal for BSTs.
- **Pre-order (Root-Left-Right):** Root first; used to copy or serialise a tree.
- **Post-order (Left-Right-Root):** Children before parent; used to safely delete a tree.

**Graphs:**
A graph G = (V, E) consists of **vertices** (nodes) and **edges** (connections between pairs of vertices).

Types:
- **Directed (digraph):** Edges have direction (arrows). E.g., one-way roads, Twitter follows.
- **Undirected:** Edges have no direction. E.g., Facebook friendships.
- **Weighted:** Edges have a numerical weight (cost, distance, time). E.g., road network.

Graph representation:
- **Adjacency Matrix:** V by V grid where cell [i][j] = 1 (or weight) if there is an edge from i to j. O(V squared) space. Fast edge lookup O(1).
- **Adjacency List:** Each vertex stores a list of its neighbours. O(V+E) space. Efficient for sparse graphs.

**Breadth-First Search (BFS):** Explores all vertices at distance 1 from start before distance 2 (level by level). Uses a **queue**. Finds shortest path in an unweighted graph.

**Depth-First Search (DFS):** Explores as far as possible down one path before backtracking. Uses a **stack** (or recursion). Used for maze solving, topological sorting, cycle detection.`,
    keyTerms: [
      {
        term: "Binary Tree",
        definition:
          "A hierarchical data structure where each node has at most two children (left and right). The topmost node is the root.",
      },
      {
        term: "Binary Search Tree (BST)",
        definition:
          "A binary tree where for every node, all left subtree values are smaller and all right subtree values are larger.",
      },
      {
        term: "Root",
        definition:
          "The topmost node of a tree, with no parent. All other nodes are reachable from the root.",
      },
      {
        term: "Leaf",
        definition: "A node with no children — at the bottom of a tree.",
      },
      {
        term: "In-order Traversal",
        definition:
          "Visiting nodes in Left-Root-Right order; produces ascending sorted output for a BST.",
      },
      {
        term: "Pre-order Traversal",
        definition:
          "Visiting nodes in Root-Left-Right order; used for copying or serialising a tree.",
      },
      {
        term: "Post-order Traversal",
        definition:
          "Visiting nodes in Left-Right-Root order; used when children must be processed before parents.",
      },
      {
        term: "Graph",
        definition:
          "A non-linear structure of vertices (nodes) connected by edges. Can be directed, undirected, or weighted.",
      },
      {
        term: "Adjacency Matrix",
        definition:
          "A V by V matrix representing a graph where entry [i][j] = 1 (or weight) if an edge exists from vertex i to j.",
      },
      {
        term: "BFS (Breadth-First Search)",
        definition:
          "A graph traversal using a queue that explores all neighbours before moving deeper. Finds shortest paths in unweighted graphs.",
      },
      {
        term: "DFS (Depth-First Search)",
        definition:
          "A graph traversal using a stack (or recursion) that explores as deep as possible before backtracking.",
      },
    ],
    workedExample: `**BST Insert and In-Order Traversal — Python:**

class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left  = None
        self.right = None

def bst_insert(root, value):
    if root is None:
        return BSTNode(value)   # found correct position
    if value < root.value:
        root.left  = bst_insert(root.left, value)
    elif value > root.value:
        root.right = bst_insert(root.right, value)
    return root

def inorder(root):
    """In-order: Left -> Root -> Right -> sorted output."""
    if root is not None:
        inorder(root.left)
        print(root.value, end=' ')
        inorder(root.right)

# Build BST: 50, 30, 70, 20, 40, 60, 80
root = None
for val in [50, 30, 70, 20, 40, 60, 80]:
    root = bst_insert(root, val)

#           50
#          /  \
#        30    70
#       / \   / \
#      20 40 60 80

inorder(root)  # Output: 20 30 40 50 60 70 80 (sorted!)

---

**BFS — Shortest Path in an Unweighted Graph:**

Graph: A-B-C
       |   |
       D-E-F
Start: A, Goal: F

BFS trace:
  Queue=[A], Visited={A}
  Dequeue A, add B,D -> Queue=[B,D]
  Dequeue B, add C   -> Queue=[D,C]
  Dequeue D, add E   -> Queue=[C,E]
  Dequeue C, add F   -> Queue=[E,F]
  Dequeue E — no new neighbours
  Dequeue F — GOAL FOUND!

Shortest path A->F: A -> B -> C -> F (3 edges)
BFS guarantees this is the shortest path in an unweighted graph.`,
    resources: [
      {
        title: "VisuAlgo — Binary Search Trees",
        url: "https://visualgo.net/en/bst",
        description:
          "Animated step-by-step BST insert, delete, and all three traversal orders — essential for understanding.",
        type: "website",
      },
      {
        title: "VisuAlgo — Graph Traversals (BFS and DFS)",
        url: "https://visualgo.net/en/dfsbfs",
        description:
          "Interactive BFS and DFS visualisation on any graph — see exactly how each algorithm explores nodes.",
        type: "website",
      },
      {
        title: "Khan Academy — Binary Search Trees",
        url: "https://www.khanacademy.org/computing/computer-science/algorithms/tree-algorithms/a/binary-search-trees",
        description:
          "Clear explanations of BST structure, insert, search, and traversals with worked examples.",
        type: "video",
      },
      {
        title: "Isaac Computer Science — Trees and Graphs",
        url: "https://isaaccomputerscience.org/topics/abstract_data_types",
        description:
          "IB HL-aligned tree and graph content with BST operations, BFS, DFS, and adjacency representations.",
        type: "website",
      },
      {
        title: "Oxford IB CS — Trees and Graphs (Wajan Langfield)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "Complete HL coverage of binary trees, BSTs, traversals, graphs, BFS, and DFS with IB exam practice.",
        type: "textbook",
      },
    ],
  },

  "B.4.3": {
    conceptExplanation: `**Recursion** is a programming technique where a function solves a problem by calling itself with a smaller or simpler version of the same problem. It is one of the most powerful and elegant concepts in Computer Science.

**Two Essential Components of Every Recursive Function:**
1. **Base case:** A condition that stops the recursion. When reached, the function returns a direct answer without making another recursive call. WITHOUT a base case -> infinite recursion -> Python raises RecursionError: maximum recursion depth exceeded (stack overflow).
2. **Recursive case:** The function calls itself with a *simpler* input — one step closer to the base case. The recursive call must always progress towards the base case.

**The Call Stack and Recursion:**
Each function call adds a **stack frame** to the call stack, containing the local variables and the return address. When the base case is reached, frames are popped one by one as each call completes and returns its result to the caller above it. Recursion uses memory proportional to the depth of recursion.

**Classic Recursive Algorithms:**
- **Factorial:** n! = n x (n-1) x ... x 2 x 1. Base case: 0! = 1.
- **Fibonacci:** F(n) = F(n-1) + F(n-2). Base cases: F(0) = 0, F(1) = 1.
- **Binary Search:** Recursively search the half where the target could be.

**Tower of Hanoi:** n disks on peg A must be moved to peg C using peg B as helper. Rules: only move one disk at a time; never place a larger disk on a smaller one.
Recursive solution:
1. Move n-1 disks from A to B (using C as helper)
2. Move the largest disk from A to C
3. Move n-1 disks from B to C (using A as helper)
For n=3, this requires 7 moves. For n=64, it requires 2 to the power 64 minus 1 moves (over 18 quintillion!).

**Recursion vs Iteration:**
- Recursive solutions are often cleaner for problems with inherently recursive structure (trees, graphs, divide-and-conquer)
- Iteration uses a loop and is generally more memory-efficient (no stack frames accumulate)
- Any recursion can be converted to iteration using an explicit stack data structure
- For deep recursion (n > ~1000 in Python), iteration is preferred to avoid stack overflow`,
    keyTerms: [
      {
        term: "Recursion",
        definition:
          "A technique where a function calls itself with a simpler version of the problem, eventually reaching a base case that stops the process.",
      },
      {
        term: "Base Case",
        definition:
          "The condition in a recursive function that terminates the recursion and returns a direct answer without further recursive calls.",
      },
      {
        term: "Recursive Case",
        definition:
          "The part of a recursive function where it calls itself with a smaller or simpler input, progressing towards the base case.",
      },
      {
        term: "Call Stack",
        definition:
          "The stack data structure used by the runtime to track active function calls; each call adds a frame, each return removes one.",
      },
      {
        term: "Stack Frame",
        definition:
          "A block of memory pushed onto the call stack for each function call, storing local variables, parameters, and the return address.",
      },
      {
        term: "RecursionError",
        definition:
          "Python's exception raised when the call stack exceeds the maximum depth (default ~1000); caused by infinite recursion or missing base case.",
      },
      {
        term: "Tower of Hanoi",
        definition:
          "A classic recursive puzzle: move n disks from peg A to peg C using peg B, never placing a larger disk on a smaller one. Requires 2^n - 1 moves.",
      },
      {
        term: "Fibonacci Sequence",
        definition:
          "The sequence 0, 1, 1, 2, 3, 5, 8, 13... where each number is the sum of the previous two. F(n) = F(n-1) + F(n-2).",
      },
      {
        term: "Stack Overflow",
        definition:
          "When the call stack runs out of memory due to too many recursive calls without a base case; causes program termination.",
      },
      {
        term: "Divide and Conquer",
        definition:
          "An algorithm design strategy that recursively divides a problem into smaller sub-problems, solves each, and combines results. Used in merge sort, binary search.",
      },
    ],
    workedExample: `**Recursive Binary Search — With Call Stack Trace:**

def binary_search(arr, target, low, high):
    """
    Recursive binary search.
    Base case 1: low > high -> not found
    Base case 2: arr[mid] == target -> found!
    """
    if low > high:
        return -1          # BASE CASE: not found

    mid = (low + high) // 2

    if arr[mid] == target:
        return mid         # BASE CASE: found!
    elif target < arr[mid]:
        return binary_search(arr, target, low, mid - 1)   # search left
    else:
        return binary_search(arr, target, mid + 1, high)  # search right

arr = [3, 7, 12, 19, 25, 34, 41]
print(binary_search(arr, 25, 0, len(arr)-1))  # Output: 4

---

CALL STACK TRACE — searching for 25 in [3,7,12,19,25,34,41]:

Push: bs(arr,25, low=0, high=6) -> mid=3, arr[3]=19, 25>19
  Push: bs(arr,25, low=4, high=6) -> mid=5, arr[5]=34, 25<34
    Push: bs(arr,25, low=4, high=4) -> mid=4, arr[4]=25
    BASE CASE: return 4
  Pop: returns 4
Pop: returns 4

---

**TRACING factorial(4) — Stack Build and Unwind:**

factorial(4) -> 4 * factorial(3)  [waiting]
  factorial(3) -> 3 * factorial(2)  [waiting]
    factorial(2) -> 2 * factorial(1)  [waiting]
      factorial(1) -> BASE CASE, returns 1
    factorial(2) = 2 x 1 = 2, returns 2
  factorial(3) = 3 x 2 = 6, returns 6
factorial(4) = 4 x 6 = 24, returns 24

---

**Tower of Hanoi — 3 Disks (7 moves):**

def hanoi(n, source, target, helper):
    if n == 1:   # base case
        print(f"Move disk 1: {source} -> {target}")
        return
    hanoi(n-1, source, helper, target)  # n-1 disks A->B
    print(f"Move disk {n}: {source} -> {target}")
    hanoi(n-1, helper, target, source)  # n-1 disks B->C

hanoi(3, 'A', 'C', 'B')
# Move disk 1: A -> C
# Move disk 2: A -> B
# Move disk 1: C -> B
# Move disk 3: A -> C
# Move disk 1: B -> A
# Move disk 2: B -> C
# Move disk 1: A -> C`,
    hlExtension: `**HL Extension — Merge Sort: Recursive Divide and Conquer:**

def merge_sort(arr):
    if len(arr) <= 1:
        return arr   # BASE CASE: already sorted

    mid = len(arr) // 2
    left  = merge_sort(arr[:mid])   # RECURSIVE: sort left half
    right = merge_sort(arr[mid:])   # RECURSIVE: sort right half

    return merge(left, right)

def merge(left, right):
    result = []
    i, j = 0, 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

print(merge_sort([38, 27, 43, 3, 9, 82, 10]))
# Output: [3, 9, 10, 27, 38, 43, 82]

Why O(n log n):
  - There are log2(n) levels of recursion (we halve log n times)
  - Each level does O(n) work total across all merge operations
  - Total: O(n) x O(log n) = O(n log n)`,
    resources: [
      {
        title: "VisuAlgo — Recursion Visualiser",
        url: "https://visualgo.net/en/recursion",
        description:
          "Animated visualisation of recursive call trees — see the call stack build and unwind step by step.",
        type: "website",
      },
      {
        title: "Khan Academy — Recursion",
        url: "https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/recursion",
        description:
          "Clear introduction to recursion with factorial, Fibonacci, and Tower of Hanoi worked examples.",
        type: "video",
      },
      {
        title: "Python Tutor — Visualise Code Execution",
        url: "https://pythontutor.com/python-compiler.html",
        description:
          "Paste any Python code and step through it visually — see call stack frames build and unwind in real time.",
        type: "website",
      },
      {
        title: "Isaac Computer Science — Recursion",
        url: "https://isaaccomputerscience.org/topics/abstract_data_types",
        description:
          "IB HL-aligned recursion content: base cases, call stacks, classic recursive algorithms, and exam questions.",
        type: "website",
      },
      {
        title: "Oxford IB CS — Recursion (Wajan Langfield)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "Complete HL recursion coverage: factorial, Fibonacci, Tower of Hanoi, merge sort, and IB exam-style questions.",
        type: "textbook",
      },
    ],
  },
};
