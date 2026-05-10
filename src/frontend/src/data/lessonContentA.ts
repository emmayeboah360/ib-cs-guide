// Detailed lesson content for IB DP Computer Science — Theme A: Concepts of Computer Science
// References: Oxford IB CS (Wajan Langfield), Hodder IB CS (Paul Baumgarten),
// Isaac Computer Science, Khan Academy, BBC Bitesize, IB official guide

export interface SubtopicLesson {
  conceptExplanation: string;
  keyTerms: { term: string; definition: string }[];
  workedExample?: string;
  hlExtension?: string;
  resources: {
    title: string;
    url: string;
    description: string;
    type: "textbook" | "video" | "website" | "official";
  }[];
}

export const lessonContentA: Record<string, SubtopicLesson> = {
  // ─── A.1 Computer Fundamentals ───────────────────────────────────────────────

  "A.1.1": {
    conceptExplanation: `A computer system is built from several key hardware components that work together to process information. Understanding each component and how they interact is fundamental to Computer Science.

**The Central Processing Unit (CPU)** is the brain of the computer. It contains three main sub-units:
- **Arithmetic Logic Unit (ALU)** — performs all arithmetic operations (addition, subtraction, multiplication) and logical comparisons (AND, OR, NOT, greater-than, less-than).
- **Control Unit (CU)** — directs the flow of data between the CPU, memory, and I/O devices. It fetches instructions from memory, decodes them, and coordinates execution.
- **Registers** — tiny, ultra-fast storage locations inside the CPU that hold data currently being processed. Key registers include the Program Counter (PC), Memory Address Register (MAR), Memory Data Register (MDR), Current Instruction Register (CIR), and the Accumulator (ACC).
- **Cache** — a small, very fast memory bank between the CPU and RAM. It stores frequently accessed data so the CPU doesn't have to fetch it from the slower RAM every time. Cache levels: L1 (fastest, smallest, inside CPU core), L2, and L3.
- **Clock speed** (measured in GHz) determines how many instructions the CPU can process per second. A 3 GHz CPU can execute up to 3 billion clock cycles per second.

**The Fetch-Decode-Execute Cycle (FDE)** is the continuous process by which the CPU processes instructions:
1. **Fetch** — the PC holds the address of the next instruction. That address is copied to the MAR, and the instruction is retrieved from RAM into the MDR, then into the CIR. The PC increments to point to the next instruction.
2. **Decode** — the CU interprets the instruction stored in the CIR, identifying the operation (opcode) and operands.
3. **Execute** — the ALU performs the operation, or data is moved as directed.

**Memory** comes in two types:
- **RAM (Random Access Memory)** — primary storage; volatile (data is lost when power is off); fast read/write; holds the OS, running applications, and current data.
- **ROM (Read-Only Memory)** — non-volatile; stores firmware like the BIOS/UEFI that runs when the computer starts; cannot be easily modified.

**Secondary Storage** provides persistent, non-volatile storage:
- **HDD (Hard Disk Drive)** — uses spinning magnetic platters; large capacity, slow access, affordable.
- **SSD (Solid State Drive)** — uses flash memory chips; no moving parts; much faster than HDD, more expensive per GB.
- **Optical storage** (CD, DVD, Blu-ray) — laser-read discs; used for distribution and archiving.

**Von Neumann Architecture** describes the design principle where a program and its data are both stored in the same memory space. This allows programs to be changed without rewiring hardware — a revolutionary idea when proposed in 1945.

**Buses** are electrical pathways that transfer data between components:
- **Data bus** — carries actual data being transferred (bidirectional).
- **Address bus** — carries memory addresses (unidirectional, from CPU to memory).
- **Control bus** — carries control signals (read/write, clock, interrupt signals).`,
    keyTerms: [
      {
        term: "CPU",
        definition:
          "Central Processing Unit — the primary component that executes program instructions, consisting of the ALU, CU, and registers.",
      },
      {
        term: "ALU",
        definition:
          "Arithmetic Logic Unit — the part of the CPU that performs arithmetic calculations and logical comparisons.",
      },
      {
        term: "Control Unit (CU)",
        definition:
          "Coordinates all activities of the CPU, fetching, decoding, and managing the execution of instructions.",
      },
      {
        term: "Register",
        definition:
          "An extremely fast, small memory storage area inside the CPU used to hold data being actively processed.",
      },
      {
        term: "Cache",
        definition:
          "A small, fast memory buffer between the CPU and RAM that stores recently or frequently used data to speed up access.",
      },
      {
        term: "Clock Speed",
        definition:
          "The rate at which the CPU executes instructions, measured in GHz (billions of cycles per second).",
      },
      {
        term: "RAM",
        definition:
          "Random Access Memory — volatile primary storage that holds running programs and data; contents are lost when power is removed.",
      },
      {
        term: "ROM",
        definition:
          "Read-Only Memory — non-volatile memory that retains data without power, typically storing firmware like the BIOS.",
      },
      {
        term: "Von Neumann Architecture",
        definition:
          "A computer design model where both program instructions and data are stored in the same memory, enabling general-purpose computing.",
      },
      {
        term: "Fetch-Decode-Execute Cycle",
        definition:
          "The continuous 3-step process the CPU follows to retrieve an instruction from memory, decode it, and carry it out.",
      },
      {
        term: "Bus",
        definition:
          "A set of electrical conductors (wires/traces) that transfer data, addresses, or control signals between computer components.",
      },
    ],
    workedExample: `**Tracing the FDE Cycle for: ADD 5, 3**

Assume instruction ADD is at memory address 100:

1. FETCH:
   - PC = 100 (address of next instruction)
   - MAR ← 100
   - MDR ← Memory[100] = "ADD 5, 3"
   - CIR ← MDR = "ADD 5, 3"
   - PC ← 101 (increment to next address)

2. DECODE:
   - CU reads CIR: opcode = ADD, operands = 5 and 3

3. EXECUTE:
   - ALU performs: 5 + 3 = 8
   - Result 8 is stored in the Accumulator (ACC)

---

**Comparing RAM and HDD:**

| Feature        | RAM           | HDD              |
|----------------|---------------|------------------|
| Volatility     | Volatile      | Non-volatile     |
| Speed          | ~nanoseconds  | ~milliseconds    |
| Typical size   | 8–64 GB       | 500 GB – 4 TB    |
| Role           | Working memory| Permanent storage|`,
    resources: [
      {
        title: "Isaac Computer Science — Computer Architecture",
        url: "https://isaaccomputerscience.org/topics/computer_architecture",
        description:
          "Free interactive lessons on CPU components, FDE cycle, and memory hierarchy with IB-aligned exam questions.",
        type: "website",
      },
      {
        title: "BBC Bitesize — Computer Organisation",
        url: "https://www.bbc.co.uk/bitesize/guides/zhppfcw/revision/1",
        description:
          "Clear, illustrated revision guide to CPU components and the stored program concept.",
        type: "website",
      },
      {
        title: "Khan Academy — Computer Science Fundamentals",
        url: "https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:computers",
        description:
          "Video series explaining how computers work, covering CPU, memory, and binary at an accessible level.",
        type: "video",
      },
      {
        title: "Oxford IB Computer Science — Wajan Langfield (Chapter 2)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "Definitive IB-aligned textbook covering hardware architecture, memory, and the FDE cycle in depth. ISBN: 978-0-19-844652-1.",
        type: "textbook",
      },
      {
        title: "IB Computer Science Subject Guide",
        url: "https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/computer-science/",
        description:
          "Official IB guide detailing learning objectives and assessment criteria for computer fundamentals.",
        type: "official",
      },
    ],
  },

  "A.1.2": {
    conceptExplanation: `Computers store and process all information as **binary** — sequences of 0s and 1s (bits). Understanding how data is encoded in binary is essential for every aspect of Computer Science.

**The Binary Number System** uses base-2, meaning only two digits (0 and 1) exist. Each digit's position represents a power of 2.

Example — converting 42 to binary:
- 42 ÷ 2 = 21 remainder **0**
- 21 ÷ 2 = 10 remainder **1**
- 10 ÷ 2 = 5 remainder **0**
- 5 ÷ 2 = 2 remainder **1**
- 2 ÷ 2 = 1 remainder **0**
- 1 ÷ 2 = 0 remainder **1**
Reading remainders upward: 42₁₀ = **101010**₂

**Hexadecimal (base-16)** uses digits 0–9 and letters A–F. It is a compact shorthand for binary since one hex digit represents exactly 4 binary bits (a nibble).
- Binary 1111 = Hex F = Decimal 15
- Binary 10101010 = Hex AA = Decimal 170

**Two's Complement** is the standard method for representing negative integers in binary. For an 8-bit system:
1. Write the positive number in 8-bit binary.
2. Invert all bits (flip 0s and 1s).
3. Add 1 to the result.
The most significant bit (MSB) acts as the sign bit: 0 = positive, 1 = negative.

Example — represent -5 in 8-bit two's complement:
1. +5 in binary: 00000101
2. Invert: 11111010
3. Add 1: 11111011 ← this represents -5

**Character Encoding:**
- **ASCII (American Standard Code for Information Interchange)** maps 128 characters (letters, digits, symbols) to 7-bit codes. E.g., 'A' = 65 = 01000001₂.
- **Unicode (UTF-8/UTF-16/UTF-32)** is the modern standard, encoding over 143,000 characters from all world languages, symbols, and emoji.

**Images — Pixels and Colour:**
A digital image is a grid of **pixels**. Each pixel's colour is stored as a combination of Red, Green, Blue (RGB) intensities. In **24-bit colour** (True Colour), each channel uses 8 bits (0–255), giving 256 × 256 × 256 = over 16 million possible colours per pixel.

**Sound Sampling:**
Analogue audio waves are captured digitally by:
- **Sampling** — measuring the wave's amplitude at regular intervals.
- **Sample rate** (Hz) — how many samples per second. CD quality = 44,100 Hz. Higher rate → better quality → larger file.
- **Bit depth** — how many bits store each sample value. 16-bit depth gives 65,536 amplitude levels. More bits → more accurate → larger file.

**File Compression:**
- **Lossless** — reduces file size with no quality loss. Works by encoding repeated patterns more efficiently. E.g., PNG, FLAC, ZIP. Original data can be perfectly reconstructed.
- **Lossy** — achieves much greater compression by discarding imperceptible data. E.g., JPEG, MP3. Original data cannot be recovered exactly.`,
    keyTerms: [
      {
        term: "Bit",
        definition:
          "The smallest unit of digital information, with a value of either 0 or 1.",
      },
      {
        term: "Byte",
        definition:
          "A group of 8 bits. Can represent 256 (2⁸) different values.",
      },
      {
        term: "Binary",
        definition:
          "Base-2 number system using only digits 0 and 1, the fundamental language of computers.",
      },
      {
        term: "Hexadecimal",
        definition:
          "Base-16 number system using digits 0–9 and A–F, used as a compact representation of binary data.",
      },
      {
        term: "Two's Complement",
        definition:
          "A method for representing positive and negative integers in binary, where the MSB is the sign bit and negatives are formed by inverting bits then adding 1.",
      },
      {
        term: "ASCII",
        definition:
          "American Standard Code for Information Interchange — a 7-bit character encoding standard for English characters and control characters.",
      },
      {
        term: "Unicode",
        definition:
          "An international character encoding standard that covers over 143,000 characters from all modern and historic scripts.",
      },
      {
        term: "Pixel",
        definition:
          "The smallest addressable element in a digital image, each storing a colour value.",
      },
      {
        term: "Sample Rate",
        definition:
          "The number of audio samples captured per second when digitising sound, measured in Hertz (Hz).",
      },
      {
        term: "Bit Depth",
        definition:
          "The number of bits used to represent each audio sample, determining the precision of amplitude representation.",
      },
      {
        term: "Lossless Compression",
        definition:
          "Data compression that reduces file size while allowing perfect reconstruction of the original data.",
      },
      {
        term: "Lossy Compression",
        definition:
          "Data compression that achieves smaller file sizes by permanently discarding some data, resulting in reduced quality.",
      },
    ],
    workedExample: `**Convert 42 to binary and hexadecimal:**

Decimal → Binary (repeated division by 2):
  42 ÷ 2 = 21 r 0
  21 ÷ 2 = 10 r 1
  10 ÷ 2 =  5 r 0
   5 ÷ 2 =  2 r 1
   2 ÷ 2 =  1 r 0
   1 ÷ 2 =  0 r 1
  Read upward: 101010₂

Decimal → Hex:
  42 ÷ 16 = 2 remainder 10 (= A in hex)
  2  ÷ 16 = 0 remainder 2
  Read upward: 2A₁₆
  ∴ 42₁₀ = 101010₂ = 2A₁₆

---

**Represent -5 in 8-bit two's complement:**
  Step 1 — +5 in 8-bit binary: 00000101
  Step 2 — Invert all bits:    11111010
  Step 3 — Add 1:              11111011
  ∴ -5 in 8-bit two's complement = 11111011₂

Verify: 11111011 (negative because MSB = 1)
  Invert: 00000100, Add 1: 00000101 = 5 ✓

---

**RGB Colour Representation:**
  Pure red   = (255, 0,   0  ) = FF0000 in hex
  Pure green = (0,   255, 0  ) = 00FF00 in hex
  White      = (255, 255, 255) = FFFFFF in hex
  A medium blue = (0, 102, 204) = 0066CC in hex`,
    resources: [
      {
        title: "Isaac Computer Science — Binary & Data Representation",
        url: "https://isaaccomputerscience.org/topics/data_representation",
        description:
          "Comprehensive IB-aligned coverage of binary, hex, two's complement, ASCII, and image/sound encoding with practice exercises.",
        type: "website",
      },
      {
        title: "BBC Bitesize — Data Representation",
        url: "https://www.bbc.co.uk/bitesize/guides/zsnbr82/revision/1",
        description:
          "Clear revision pages covering binary, hex, text encoding, image storage, and sound digitisation.",
        type: "website",
      },
      {
        title: "Khan Academy — Binary Numbers",
        url: "https://www.khanacademy.org/math/algebra-home/alg-intro-to-algebra/algebra-alternate-number-bases/v/number-systems-introduction",
        description:
          "Visual, step-by-step video lessons on number base conversions with interactive exercises.",
        type: "video",
      },
      {
        title: "Oxford IB Computer Science — Wajan Langfield (Chapter 3)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "In-depth coverage of data types, encoding, compression, and number systems with IB exam practice questions.",
        type: "textbook",
      },
      {
        title: "Hodder IB Computer Science — Paul Baumgarten (Unit 1.1)",
        url: "https://www.hoddereducation.co.uk/subjects/ib/ib-diploma/computer-science",
        description:
          "Clear explanations with worked examples of binary arithmetic and encoding — excellent for exam revision.",
        type: "textbook",
      },
    ],
  },

  "A.1.3": {
    conceptExplanation: `**Logic gates** are the fundamental building blocks of digital circuits. Each gate performs a basic Boolean operation on one or more binary inputs (0 or 1) and produces a single binary output.

**The Six Main Gates:**

**AND** — output is 1 only when ALL inputs are 1. Think: "both A and B must be true."

**OR** — output is 1 when AT LEAST ONE input is 1. Think: "either A or B (or both)."

**NOT** — inverts a single input. Also called an inverter. 0 → 1, 1 → 0.

**NAND (Not AND)** — the inverse of AND. Output is 0 only when all inputs are 1. NAND is called a "universal gate" because any logic circuit can be built from NAND gates alone.

**NOR (Not OR)** — the inverse of OR. Output is 1 only when all inputs are 0. Also a universal gate.

**XOR (Exclusive OR)** — output is 1 when inputs are DIFFERENT. Output is 0 when both inputs are the same.

**Truth Tables** list all possible input combinations and the corresponding output for a logic expression. For 2 inputs (A and B) there are 4 combinations (00, 01, 10, 11).

**Boolean Algebra** provides a mathematical way to express and manipulate logical expressions:
- **AND** → A · B (or A AND B)
- **OR** → A + B (or A OR B)
- **NOT** → Ā (or NOT A)

**Key Boolean Laws:**
- Identity: A · 1 = A; A + 0 = A
- Null: A · 0 = 0; A + 1 = 1
- Idempotent: A · A = A; A + A = A
- Complement: A · Ā = 0; A + Ā = 1
- Commutative: A · B = B · A
- Distributive: A · (B + C) = (A · B) + (A · C)

**The Half Adder** is a simple circuit that adds two 1-bit numbers. It produces a SUM output and a CARRY output:
- SUM = A XOR B
- CARRY = A AND B

**The Full Adder** extends the half adder to also accept a carry-in from a previous addition, enabling multi-bit binary addition.`,
    keyTerms: [
      {
        term: "Logic Gate",
        definition:
          "An electronic circuit that performs a Boolean operation on one or more binary inputs to produce a single binary output.",
      },
      {
        term: "Truth Table",
        definition:
          "A table listing all possible input combinations for a logic expression and the resulting output for each combination.",
      },
      {
        term: "AND Gate",
        definition:
          "Outputs 1 only when all inputs are 1; equivalent to logical conjunction (·).",
      },
      {
        term: "OR Gate",
        definition:
          "Outputs 1 when at least one input is 1; equivalent to logical disjunction (+).",
      },
      {
        term: "NOT Gate",
        definition:
          "Inverts a single input; also called an inverter. Outputs the logical complement (Ā).",
      },
      {
        term: "NAND Gate",
        definition:
          "The inverse of AND — outputs 0 only when all inputs are 1. A universal gate.",
      },
      {
        term: "XOR Gate",
        definition:
          "Exclusive OR — outputs 1 only when inputs differ (one 0, one 1).",
      },
      {
        term: "Boolean Algebra",
        definition:
          "A branch of algebra dealing with binary variables and logical operations, forming the mathematical basis of digital circuits.",
      },
      {
        term: "Universal Gate",
        definition:
          "A gate (NAND or NOR) from which any other logic gate can be constructed, making it sufficient to build any circuit.",
      },
      {
        term: "Half Adder",
        definition:
          "A logic circuit that adds two single bits, producing a Sum (XOR) and Carry (AND) output.",
      },
    ],
    workedExample: `**Truth table for A AND (B OR C):**

| A | B | C | B OR C | A AND (B OR C) |
|---|---|---|--------|----------------|
| 0 | 0 | 0 |   0    |       0        |
| 0 | 0 | 1 |   1    |       0        |
| 0 | 1 | 0 |   1    |       0        |
| 0 | 1 | 1 |   1    |       0        |
| 1 | 0 | 0 |   0    |       0        |
| 1 | 0 | 1 |   1    |       1        |
| 1 | 1 | 0 |   1    |       1        |
| 1 | 1 | 1 |   1    |       1        |

Result: Output is 1 only when A=1 AND at least one of B or C is 1.

---

**Half Adder — adding 1 + 1:**
  Inputs: A=1, B=1
  SUM   = A XOR B = 1 XOR 1 = 0
  CARRY = A AND B = 1 AND 1 = 1
  Result: 0 with carry 1 (i.e., 1+1=10₂ = 2₁₀) ✓`,
    hlExtension: `**De Morgan's Laws (HL Extension)**

De Morgan's Laws provide rules for simplifying and transforming Boolean expressions involving NOT with AND/OR:

**Law 1:** NOT(A AND B) = NOT A OR NOT B
  → Ā·B̄ ... wait, correct form: NOT(A·B) = Ā + B̄
  → The NAND gate implements this directly!

**Law 2:** NOT(A OR B) = NOT A AND NOT B
  → NOT(A+B) = Ā · B̄
  → The NOR gate implements this directly!

**Practical Use — Simplification Example:**

Simplify: NOT(A AND B) AND NOT(A OR B)
  = (Ā + B̄) · (Ā · B̄)     [De Morgan's applied]
  = Ā·Ā · B̄ + Ā·B̄·B̄     [expand]
  = Ā·B̄ + Ā·B̄           [idempotent: X·X = X]
  = Ā·B̄
  ∴ The expression simplifies to: NOT A AND NOT B

This means the circuit can be drawn with just two NOT gates and one AND gate instead of the full complex circuit. De Morgan's Laws are essential for minimising real logic circuits in hardware design.`,
    resources: [
      {
        title: "Isaac Computer Science — Logic & Boolean Algebra",
        url: "https://isaaccomputerscience.org/topics/boolean_logic",
        description:
          "Interactive truth tables, Boolean simplification exercises, and circuit diagrams — ideal for IB practice.",
        type: "website",
      },
      {
        title: "BBC Bitesize — Logic Gates",
        url: "https://www.bbc.co.uk/bitesize/guides/zc37hyc/revision/1",
        description:
          "Visual guide to all logic gate symbols, truth tables, and combining gates into circuits.",
        type: "website",
      },
      {
        title: "Khan Academy — Logic Gates and Circuits",
        url: "https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:computers/xcae6f4a7ff015e7d:logic-gates-and-circuits/a/logic-gates",
        description:
          "Introductory video lessons on all standard logic gates with visual circuit explanations.",
        type: "video",
      },
      {
        title: "Oxford IB Computer Science — Wajan Langfield (Chapter 4)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "Logic gates, Boolean algebra, De Morgan's laws, and circuit design covered with IB exam context.",
        type: "textbook",
      },
      {
        title: "Hodder IB CS — Boolean Algebra & Logic Circuits",
        url: "https://www.hoddereducation.co.uk/subjects/ib/ib-diploma/computer-science",
        description:
          "Step-by-step examples of constructing and simplifying Boolean expressions with worked exam questions.",
        type: "textbook",
      },
    ],
  },

  "A.1.4": {
    conceptExplanation: `An **Operating System (OS)** is the master system software that manages all hardware resources and provides services for user applications. Without an OS, a user would need to directly program hardware at the binary level for every task.

**Core Functions of an OS:**

**1. Process Management**
A *process* is a running program. The OS manages multiple processes simultaneously, deciding which gets CPU time (scheduling), pausing and resuming them, and ensuring they don't interfere with each other.

Process states form a lifecycle:
- **New** → being created
- **Ready** → loaded in memory, waiting for CPU
- **Running** → currently executing on CPU
- **Waiting/Blocked** → paused, waiting for I/O or an event
- **Terminated** → finished execution

**2. Memory Management**
The OS allocates regions of RAM to each process, preventing one program from accessing another's memory. **Virtual memory** extends usable memory by temporarily moving inactive data to secondary storage (the hard disk) and swapping it back in when needed — this is called *paging*.

**3. File System Management**
The OS organises data on storage devices through a hierarchical file system (directories/folders). It manages file creation, deletion, reading, writing, permissions, and metadata.

**4. Device Management**
The OS communicates with hardware devices via **device drivers** — software translators between the OS kernel and specific hardware. This abstraction means application software doesn't need to know hardware specifics.

**5. User Interface**
The OS provides either a **Command Line Interface (CLI)** (text-based commands, e.g., Unix/Linux terminal) or a **Graphical User Interface (GUI)** (windows, icons, menus — e.g., Windows, macOS).

**Types of Operating Systems:**
- **Batch OS** — jobs are collected and processed in batches without user interaction. Used in payroll, bank statement processing.
- **Time-sharing (Multitasking) OS** — multiple users/processes share CPU time through rapid context switching. Most modern desktop OSes.
- **Real-time OS (RTOS)** — guarantees response within strict time deadlines. Used in aircraft control, medical devices, anti-lock brakes.
- **Distributed OS** — manages a network of computers to appear as a single system. Used in cloud computing.
- **Embedded OS** — minimal OS for specific devices like routers, smart TVs, or ATMs.`,
    keyTerms: [
      {
        term: "Operating System",
        definition:
          "System software that manages hardware resources, provides services to applications, and presents a user interface.",
      },
      {
        term: "Process",
        definition:
          "An instance of a program currently loaded into memory and being executed by the CPU.",
      },
      {
        term: "Process Scheduling",
        definition:
          "The OS mechanism for deciding which process runs on the CPU at any given moment.",
      },
      {
        term: "Virtual Memory",
        definition:
          "A memory management technique that uses secondary storage to extend the available RAM, using paging to swap data in and out.",
      },
      {
        term: "Device Driver",
        definition:
          "Software that acts as a translator between the OS and a specific hardware device, abstracting hardware details.",
      },
      {
        term: "Multitasking",
        definition:
          "The OS capability to run multiple processes apparently simultaneously by rapidly switching CPU time between them.",
      },
      {
        term: "Real-Time OS",
        definition:
          "An OS designed to process data and respond within guaranteed time constraints, critical for safety systems.",
      },
      {
        term: "CLI",
        definition:
          "Command Line Interface — a text-based user interface where commands are typed as text strings.",
      },
      {
        term: "GUI",
        definition:
          "Graphical User Interface — a visual interface using windows, icons, and menus for user interaction.",
      },
      {
        term: "Kernel",
        definition:
          "The core of the OS that directly manages hardware, memory, and process communication.",
      },
    ],
    workedExample: `**Process State Diagram — Lifecycle of a Process:**

  NEW ──────────────────────────► READY
                 (admitted)          │
                                     │ scheduler dispatch
                                     ▼
  TERMINATED ◄─────────────── RUNNING
    (exit)         │               │
                   │               │ I/O request
                   │               ▼
                   └──────── WAITING/BLOCKED
                                   │
                          (I/O complete)
                                   │
                                   └──► READY

Example:
1. You double-click Google Chrome → process created (NEW)
2. OS loads Chrome into RAM → moves to READY queue
3. CPU becomes free → OS dispatches Chrome → RUNNING
4. Chrome requests a web page from network → BLOCKED (waiting for I/O)
5. Network data arrives → Chrome moves back to READY
6. CPU dispatches Chrome again → RUNNING (renders page)
7. You close Chrome → process TERMINATED, RAM freed`,
    hlExtension: `**CPU Scheduling Algorithms (HL Extension)**

The OS must decide the order in which ready processes access the CPU. Different algorithms have different trade-offs:

**1. First-Come First-Served (FCFS)**
Processes are executed in the order they arrive. Simple to implement but suffers from the "convoy effect" — long processes block short ones.

Example: Processes arrive: P1(10ms), P2(3ms), P3(2ms)
FCFS order: P1 → P2 → P3
Average wait = (0 + 10 + 13) / 3 = 7.67ms

**2. Shortest Job First (SJF)**
Always picks the process with the shortest CPU burst time next. Minimises average waiting time but requires knowing burst lengths in advance (impractical in practice).

SJF order: P3(2ms) → P2(3ms) → P1(10ms)
Average wait = (0 + 2 + 5) / 3 = 2.33ms ← much better!

**3. Round Robin (RR)**
Each process gets a fixed time slice (quantum, e.g., 10ms). After its quantum expires, the process is moved to the back of the ready queue. Ensures fairness and responsiveness — used in most modern interactive OSes.

With quantum = 4ms: P1 gets 4ms, then P2 gets 3ms, then P3 gets 2ms, then P1 gets remaining 6ms.

**Trade-offs:**
- FCFS: Simple, but unfair to short jobs.
- SJF: Optimal for throughput, but not practical (future burst times unknown).
- RR: Fair and responsive, but context-switching overhead increases with small quanta.`,
    resources: [
      {
        title: "Isaac Computer Science — Operating Systems",
        url: "https://isaaccomputerscience.org/topics/operating_systems",
        description:
          "Complete lesson set on OS functions, process management, memory management, and scheduling algorithms.",
        type: "website",
      },
      {
        title: "BBC Bitesize — The Purpose of an Operating System",
        url: "https://www.bbc.co.uk/bitesize/guides/z7kkw6f/revision/1",
        description:
          "Beginner-friendly revision on OS functions, types of OS, and user interfaces.",
        type: "website",
      },
      {
        title: "Khan Academy — Operating Systems Overview",
        url: "https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:computers/xcae6f4a7ff015e7d:computer-software/a/operating-systems",
        description:
          "Visual introduction to what an OS does, with examples and diagrams.",
        type: "video",
      },
      {
        title: "Oxford IB Computer Science — Wajan Langfield (Chapter 5)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "Thorough coverage of OS functions, scheduling algorithms, virtual memory, and HL exam-style questions.",
        type: "textbook",
      },
      {
        title: "IB DP Computer Science Subject Guide — A.1 Content",
        url: "https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/computer-science/",
        description:
          "Official IB learning objectives for Operating Systems at SL and HL.",
        type: "official",
      },
    ],
  },

  // ─── A.2 Networks ────────────────────────────────────────────────────────────

  "A.2.1": {
    conceptExplanation: `A **computer network** is two or more devices connected together to share resources and communicate. Networks form the infrastructure of the modern digital world.

**Network Types by Geographic Scale:**

- **PAN (Personal Area Network)** — very short range (~10m). Connects personal devices: phone to headphones via Bluetooth, laptop to smartwatch. Examples: Bluetooth, NFC.
- **LAN (Local Area Network)** — covers a single building or campus (up to ~1km). Used in homes, schools, offices. Usually owned and managed by a single organisation. Typically fast (1Gbps+) and low-cost.
- **MAN (Metropolitan Area Network)** — covers a city or large campus (~10km). Often used by municipalities or large universities. Example: city-wide Wi-Fi, cable TV networks.
- **WAN (Wide Area Network)** — spans countries or continents. The internet is the world's largest WAN. Uses leased lines, fibre optic cables, and satellite links. Owned by telecoms providers.

**Physical Topologies** describe how devices are physically connected:

- **Star** — all devices connect to a central switch/hub. Most common in modern LANs. Advantage: if one device fails, others unaffected. Disadvantage: if the central switch fails, the whole network goes down.
- **Bus** — all devices share a single cable (the backbone). Cheap but obsolete. A break in the cable brings down the entire network; data collisions occur.
- **Ring** — each device connects to exactly two others, forming a ring. Data travels in one direction. A single break can take down the whole network.
- **Mesh** — every device connects to every other. Highly fault-tolerant. Used in WANs and military networks. Expensive to set up (many cables needed).

**Client-Server vs Peer-to-Peer:**
- **Client-Server** — dedicated servers provide services (files, web pages, email) to client machines. Centralised, scalable, easy to manage and secure. Used in schools, businesses, the web.
- **Peer-to-Peer (P2P)** — each device acts as both client and server. No dedicated server. Used in BitTorrent file sharing. Decentralised, difficult to manage or secure.

**Transmission Media:**
- **Copper (twisted pair)** — cheap, flexible, up to ~1Gbps over short distances. Used in Ethernet cables (Cat5e, Cat6).
- **Fibre optic** — uses light pulses through glass fibres; very high speed (100Gbps+), long distances, immune to electromagnetic interference. Expensive to install.
- **Wi-Fi (802.11 standards)** — wireless radio transmission; convenient but slower than wired, subject to interference.
- **Bluetooth** — short-range (~10m) wireless for personal devices.`,
    keyTerms: [
      {
        term: "LAN",
        definition:
          "Local Area Network — a network covering a small geographic area like a building or campus, usually under a single ownership.",
      },
      {
        term: "WAN",
        definition:
          "Wide Area Network — a network spanning large geographic areas, including countries or globally (e.g., the internet).",
      },
      {
        term: "PAN",
        definition:
          "Personal Area Network — a very short-range network connecting personal devices, typically via Bluetooth or NFC.",
      },
      {
        term: "Network Topology",
        definition:
          "The physical or logical arrangement of devices and connections within a network.",
      },
      {
        term: "Star Topology",
        definition:
          "A network layout where all devices connect to a central hub or switch.",
      },
      {
        term: "Mesh Topology",
        definition:
          "A network where every device connects directly to every other device, providing high redundancy.",
      },
      {
        term: "Client-Server",
        definition:
          "A network model where dedicated server computers provide services to client computers.",
      },
      {
        term: "Peer-to-Peer (P2P)",
        definition:
          "A network model where each computer acts as both client and server, sharing resources directly.",
      },
      {
        term: "Fibre Optic",
        definition:
          "A transmission medium that uses pulses of light through glass or plastic fibres, offering very high bandwidth over long distances.",
      },
      {
        term: "Bandwidth",
        definition:
          "The maximum rate of data transfer across a network connection, typically measured in Mbps or Gbps.",
      },
    ],
    workedExample: `**Comparing a Home LAN to the Internet (WAN):**

| Feature          | Home LAN                | The Internet (WAN)         |
|------------------|-------------------------|----------------------------|
| Geographic scope | One building (~100m)    | Global (millions of km)    |
| Ownership        | Homeowner               | Multiple ISPs & providers  |
| Speed            | 100Mbps–1Gbps           | Varies (1Mbps–100Gbps+)    |
| Media            | Ethernet/Wi-Fi          | Fibre, copper, satellite   |
| Security         | Private/WPA2 encrypted  | Public; many threats       |
| Management       | Home router             | Distributed routing        |

**Choosing a Topology for a 30-computer School Lab:**

Best choice: STAR topology
- Connect all 30 PCs to a central managed switch
- If one PC disconnects or fails, the other 29 are unaffected
- The switch can monitor traffic and prevent collisions
- Easy to add/remove machines
- Disadvantage: if the switch fails → all 30 PCs lose connectivity
→ Solution: use a redundant backup switch`,
    resources: [
      {
        title: "Isaac Computer Science — Networks",
        url: "https://isaaccomputerscience.org/topics/networking",
        description:
          "Detailed IB-aligned content on network types, topologies, and transmission media with exam questions.",
        type: "website",
      },
      {
        title: "BBC Bitesize — Network Topologies",
        url: "https://www.bbc.co.uk/bitesize/guides/zc37hyc/revision/1",
        description:
          "Visual revision of star, bus, ring, and mesh topologies with advantages and disadvantages.",
        type: "website",
      },
      {
        title: "Khan Academy — The Internet",
        url: "https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet",
        description:
          "Excellent video series on how networks and the internet work at a conceptual level.",
        type: "video",
      },
      {
        title:
          "Oxford IB Computer Science — Networks Chapter (Wajan Langfield)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "Complete network coverage: types, topologies, protocols, and security aligned to the IB guide.",
        type: "textbook",
      },
      {
        title: "IB DP CS Guide — A.2 Networks",
        url: "https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/computer-science/",
        description:
          "Official IB learning outcomes and assessment statements for the Networks topic.",
        type: "official",
      },
    ],
  },

  "A.2.2": {
    conceptExplanation: `**Network protocols** are agreed sets of rules that define how data is formatted, transmitted, received, and interpreted. Without protocols, devices from different manufacturers could not communicate.

**The OSI Model (Open Systems Interconnection)** is a 7-layer conceptual framework for understanding how network communication works. Each layer has a specific role and communicates with the layers directly above and below it:

| Layer | Name | Role | Example Protocols |
|-------|------|------|---------|
| 7 | Application | User-facing network services | HTTP, HTTPS, FTP, SMTP, DNS |
| 6 | Presentation | Data format, encryption, compression | SSL/TLS, JPEG, MPEG |
| 5 | Session | Establishing, managing, ending sessions | NetBIOS, RPC |
| 4 | Transport | Reliable end-to-end delivery, error checking | TCP, UDP |
| 3 | Network | Logical addressing and routing | IP, ICMP |
| 2 | Data Link | Physical addressing (MAC), error detection | Ethernet, Wi-Fi (802.11) |
| 1 | Physical | Transmission of raw bits over medium | Cables, radio waves, fibre |

**The TCP/IP Model** is the practical, real-world version used in the internet, with 4 layers:
- Application (combines OSI 5, 6, 7)
- Transport (TCP / UDP)
- Internet (IP addressing and routing)
- Network Access (combines OSI 1 and 2)

**Data Encapsulation** — as data passes down the layers, each layer adds its own **header** (and sometimes footer) containing control information. This wrapped data unit changes name:
- Application: **Data**
- Transport: **Segment** (TCP adds port numbers, sequence numbers)
- Network: **Packet** (IP adds source/destination IP addresses)
- Data Link: **Frame** (Ethernet adds MAC addresses)
- Physical: **Bits**

**Key Application-Layer Protocols:**
- **HTTP/HTTPS** — transfers web pages. HTTPS adds TLS encryption.
- **DNS (Domain Name System)** — translates domain names (google.com) to IP addresses (142.250.74.46).
- **DHCP** — automatically assigns IP addresses to devices joining a network.
- **FTP** — transfers files between computers.
- **SMTP/POP3/IMAP** — send and receive email.

**IP Addressing:**
- **IPv4** — 32-bit addresses, written as four decimal octets (e.g., 192.168.1.1). Limited to ~4.3 billion addresses (now largely exhausted).
- **IPv6** — 128-bit addresses (e.g., 2001:0db8:85a3::8a2e:0370:7334). Supports 340 undecillion addresses — effectively unlimited.`,
    keyTerms: [
      {
        term: "Protocol",
        definition:
          "A set of rules and standards that govern how data is formatted, transmitted, and received between network devices.",
      },
      {
        term: "OSI Model",
        definition:
          "A 7-layer conceptual framework describing how network communication should work, from physical hardware to user applications.",
      },
      {
        term: "TCP",
        definition:
          "Transmission Control Protocol — provides reliable, ordered, error-checked delivery of data between applications.",
      },
      {
        term: "IP",
        definition:
          "Internet Protocol — handles addressing and routing of packets across networks.",
      },
      {
        term: "HTTP/HTTPS",
        definition:
          "HyperText Transfer Protocol (Secure) — the protocol for transferring web pages. HTTPS uses TLS encryption.",
      },
      {
        term: "DNS",
        definition:
          "Domain Name System — a distributed database that translates human-readable domain names to IP addresses.",
      },
      {
        term: "DHCP",
        definition:
          "Dynamic Host Configuration Protocol — automatically assigns IP addresses and network configuration to devices.",
      },
      {
        term: "Encapsulation",
        definition:
          "The process of wrapping data with protocol headers at each layer of the OSI/TCP-IP model as it travels down the stack.",
      },
      {
        term: "Packet",
        definition:
          "A formatted unit of data at the Network layer, containing a header with source and destination IP addresses plus the payload.",
      },
      {
        term: "IPv4 / IPv6",
        definition:
          "IPv4 uses 32-bit addresses (e.g., 192.168.0.1); IPv6 uses 128-bit addresses to accommodate the vast growth of internet-connected devices.",
      },
    ],
    workedExample: `**Tracing a Web Request Through the OSI Layers:**

You type https://ibcs.guide in your browser:

1. APPLICATION (Layer 7)
   - Browser creates HTTP GET request: "GET / HTTP/1.1 Host: ibcs.guide"

2. PRESENTATION (Layer 6)
   - TLS encrypts the HTTP data

3. SESSION (Layer 5)
   - A TCP session is established with the server

4. TRANSPORT (Layer 4)
   - TCP wraps data in a SEGMENT
   - Adds source port (e.g., 54321) and destination port (443 for HTTPS)
   - Adds sequence numbers for ordering

5. NETWORK (Layer 3)
   - IP wraps segment in a PACKET
   - Adds source IP (your device) and destination IP (ibcs.guide server)
   - Router reads this layer to forward the packet

6. DATA LINK (Layer 2)
   - Ethernet wraps packet in a FRAME
   - Adds MAC addresses for local network delivery

7. PHYSICAL (Layer 1)
   - Frame converted to electrical signals / light pulses
   - Sent along cable to router

At the server, layers are unwrapped in reverse order (de-encapsulation) until the HTTP request reaches the web server application.`,
    resources: [
      {
        title: "Isaac Computer Science — Protocols and Networking",
        url: "https://isaaccomputerscience.org/topics/communication_and_networking",
        description:
          "Full IB-aligned lessons on OSI model, TCP/IP, protocols, and data encapsulation with exercises.",
        type: "website",
      },
      {
        title: "Khan Academy — How the Internet Works",
        url: "https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:packets-routers-and-reliability/v/the-internet-ip-addresses-and-dns",
        description:
          "Animated videos on IP addresses, DNS, packets and routing — accessible for all levels.",
        type: "video",
      },
      {
        title: "BBC Bitesize — Network Protocols",
        url: "https://www.bbc.co.uk/bitesize/guides/zfwmtfr/revision/1",
        description:
          "Clear revision pages on TCP/IP, HTTP, DNS, and the OSI model.",
        type: "website",
      },
      {
        title:
          "Oxford IB Computer Science — Protocols Chapter (Wajan Langfield)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "In-depth protocol coverage with OSI model diagrams and IB exam practice.",
        type: "textbook",
      },
      {
        title: "IB DP CS Official Guide — A.2 Protocols",
        url: "https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/computer-science/",
        description:
          "Official IB assessment statements for network protocols at SL and HL.",
        type: "official",
      },
    ],
  },

  "A.2.3": {
    conceptExplanation: `Network security protects computer networks and their data from unauthorised access, misuse, and attack. As networks become central to all aspects of life, security is a critical concern for individuals, businesses, and governments.

**The CIA Triad** is the foundational framework for information security:
- **Confidentiality** — only authorised users can access data. Broken by unauthorised disclosure.
- **Integrity** — data is accurate and has not been tampered with. Broken by unauthorised modification.
- **Availability** — systems and data are accessible when needed. Broken by denial-of-service attacks.

**Common Threats:**
- **Phishing** — fraudulent emails or websites that trick users into revealing credentials or downloading malware. Targets human psychology rather than technical vulnerabilities.
- **Malware** — malicious software including viruses (self-replicating), ransomware (encrypts files for ransom), spyware (secretly monitors activity), and trojans (disguised as legitimate software).
- **DDoS (Distributed Denial of Service)** — a botnet floods a server with requests until it becomes overwhelmed and unavailable to legitimate users.
- **Man-in-the-Middle (MITM)** — an attacker secretly intercepts communication between two parties, potentially reading or altering the data.
- **SQL Injection** — malicious SQL code is inserted into an input field, causing a database to execute unintended commands (e.g., leaking all user data).

**Encryption** is the process of converting readable data (plaintext) into unreadable ciphertext using a mathematical algorithm and a key:
- **Symmetric encryption** — the same key is used to encrypt and decrypt. Fast, but the key must be shared securely. Example: AES (Advanced Encryption Standard).
- **Asymmetric encryption** — uses a public/private key pair. The public key encrypts; only the matching private key decrypts. Slower but solves the key distribution problem. Example: RSA.

**SSL/TLS** combines both: asymmetric encryption to securely exchange a symmetric session key, then symmetric encryption for the bulk data transfer. This is the "S" in HTTPS.

**Security Measures:**
- **Firewall** — inspects incoming/outgoing traffic and blocks packets that violate rules. Can be hardware or software.
- **VPN (Virtual Private Network)** — creates an encrypted tunnel over a public network, making remote connections private and secure.
- **Two-Factor Authentication (2FA)** — requires a second proof of identity (e.g., SMS code, authenticator app) in addition to a password.
- **Access Control** — role-based permissions ensure users only access the resources they need.
- **Antivirus/Anti-malware** — scans files and processes for known malicious signatures or suspicious behaviour.`,
    keyTerms: [
      {
        term: "CIA Triad",
        definition:
          "The three core principles of information security: Confidentiality, Integrity, and Availability.",
      },
      {
        term: "Encryption",
        definition:
          "The process of encoding data using an algorithm and key so that only authorised parties can decode and read it.",
      },
      {
        term: "Symmetric Encryption",
        definition:
          "An encryption method where the same key is used for both encrypting and decrypting data. Fast but requires secure key sharing.",
      },
      {
        term: "Asymmetric Encryption",
        definition:
          "An encryption method using a public key (for encryption) and a private key (for decryption). Used in HTTPS and digital certificates.",
      },
      {
        term: "Firewall",
        definition:
          "A network security system that monitors and controls incoming and outgoing traffic based on predetermined security rules.",
      },
      {
        term: "Phishing",
        definition:
          "A social engineering attack using deceptive emails or websites to trick users into revealing sensitive information.",
      },
      {
        term: "DDoS",
        definition:
          "Distributed Denial of Service — an attack that overwhelms a server with traffic from many compromised machines simultaneously.",
      },
      {
        term: "VPN",
        definition:
          "Virtual Private Network — creates an encrypted tunnel over the internet, making remote access private and secure.",
      },
      {
        term: "TLS/SSL",
        definition:
          "Transport Layer Security / Secure Sockets Layer — cryptographic protocols that provide secure communication over a network, used in HTTPS.",
      },
      {
        term: "Two-Factor Authentication",
        definition:
          "A security method requiring two separate forms of identity verification, making accounts harder to compromise.",
      },
    ],
    workedExample: `**How HTTPS Protects a Login Page:**

Scenario: User logs into their school portal at https://school.edu/login

1. CERTIFICATE CHECK
   - Browser requests the server's TLS certificate
   - Certificate contains school.edu's public key, signed by a trusted CA
   - Browser verifies the certificate is valid (not expired, not forged)

2. KEY EXCHANGE (TLS Handshake)
   - Browser generates a random session key
   - Encrypts it using school.edu's PUBLIC key (asymmetric)
   - Only school.edu's PRIVATE key can decrypt it
   - Both sides now share the same session key secretly

3. ENCRYPTED COMMUNICATION
   - All data (username, password) is encrypted using the session key (symmetric AES)
   - Even if intercepted, the data appears as random ciphertext

4. RESULT: CIA Triad maintained
   - Confidentiality: credentials encrypted end-to-end ✓
   - Integrity: TLS includes MAC (message authentication codes) ✓
   - Availability: server responds to legitimate users ✓

Without HTTPS: a MITM attacker on the same Wi-Fi could read
your plaintext username and password in a packet sniffer.`,
    resources: [
      {
        title: "Isaac Computer Science — Cybersecurity",
        url: "https://isaaccomputerscience.org/topics/cybersecurity",
        description:
          "Comprehensive IB-aligned cybersecurity content: threats, encryption, firewalls, and CIA triad with exam practice.",
        type: "website",
      },
      {
        title: "BBC Bitesize — Network Security",
        url: "https://www.bbc.co.uk/bitesize/guides/zc37hyc/revision/4",
        description:
          "Clear revision of phishing, malware, DDoS, encryption, and firewalls.",
        type: "website",
      },
      {
        title: "Khan Academy — Internet Security",
        url: "https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:cybersecurity-and-crime/a/cybersecurity-and-crime",
        description:
          "Accessible explanations of encryption, phishing, and cybercrime with worked examples.",
        type: "video",
      },
      {
        title: "Oxford IB CS — Network Security (Wajan Langfield)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "Detailed security coverage with symmetric/asymmetric encryption, TLS, firewalls, and IB exam scenarios.",
        type: "textbook",
      },
      {
        title: "Hodder IB CS — Cybersecurity Chapter (Paul Baumgarten)",
        url: "https://www.hoddereducation.co.uk/subjects/ib/ib-diploma/computer-science",
        description:
          "Practical security scenarios and IB command-term focused explanations of threats and countermeasures.",
        type: "textbook",
      },
    ],
  },

  "A.2.4": {
    conceptExplanation: `Data transmission is the process of moving data from one device to another across a network. Understanding how this works — including how errors are detected and corrected — is essential in networking.

**Packet Switching vs Circuit Switching:**

**Circuit Switching** (traditional telephone networks): A dedicated communication path is established between sender and receiver for the entire duration of the call. Resources are reserved even during silences. Predictable quality but wasteful.

**Packet Switching** (the internet): Data is broken into small, fixed-size **packets**, each of which travels independently through the network. Different packets may take different routes. Packets are reassembled at the destination. The internet uses packet switching because:
- It is more efficient — network resources are shared
- More fault-tolerant — packets route around failures
- Scales to handle billions of simultaneous users

**Bandwidth and Latency:**
- **Bandwidth** — the maximum amount of data that can be transmitted per unit time (bits per second). Higher bandwidth = more data transferred simultaneously.
- **Latency** — the delay between sending data and it arriving. Affected by distance, number of hops, and congestion. Low latency matters for real-time applications (video calls, gaming).

**Error Detection Methods:**
- **Parity bits** — a single bit added to each byte/word so that the total number of 1s is always even (even parity) or odd (odd parity). If a bit flips during transmission, the parity becomes wrong and the error is detected. Can only detect odd numbers of errors.
- **Checksums** — the sender calculates a sum from the data values and appends it. The receiver recalculates; if checksums don't match, the data was corrupted. Used in TCP/IP.
- **CRC (Cyclic Redundancy Check)** — a powerful polynomial-based error detection algorithm, used in Ethernet and storage devices. Detects all single, double, and burst errors within the frame.

**Error Correction:**
- **ARQ (Automatic Repeat reQuest)** — if an error is detected, the receiver sends a NAK (Negative Acknowledgement) and the sender retransmits the affected packet. Used in TCP.

**Serial vs Parallel Transmission:**
- **Serial** — bits sent one at a time over a single wire. Slower but immune to timing skew issues. Used over long distances (USB, SATA, network cables).
- **Parallel** — multiple bits sent simultaneously over multiple wires. Faster over short distances but susceptible to interference and synchronisation issues. Used inside computers (memory buses).

**Synchronous vs Asynchronous:**
- **Synchronous** — sender and receiver share a clock signal; data sent in continuous, timed blocks. Efficient for large data transfers.
- **Asynchronous** — data sent character-by-character with start/stop bits to signal boundaries. Used in serial ports, older modems.`,
    keyTerms: [
      {
        term: "Packet Switching",
        definition:
          "A data transmission method where data is broken into packets that travel independently across the network and are reassembled at the destination.",
      },
      {
        term: "Packet",
        definition:
          "A unit of data formatted for transmission. Includes a header (source/destination addresses, sequence number) and a payload (actual data).",
      },
      {
        term: "Bandwidth",
        definition:
          "The maximum rate of data transfer across a network link, measured in bits per second (bps, Kbps, Mbps, Gbps).",
      },
      {
        term: "Latency",
        definition:
          "The time delay between a packet being sent and received, affected by physical distance and network congestion.",
      },
      {
        term: "Parity Bit",
        definition:
          "A single extra bit added to data to make the total number of 1 bits even or odd, enabling simple error detection.",
      },
      {
        term: "Checksum",
        definition:
          "A value calculated from a set of data and appended to it; allows the receiver to verify data integrity by recalculating and comparing.",
      },
      {
        term: "CRC",
        definition:
          "Cyclic Redundancy Check — a robust error-detection algorithm using polynomial division, used in Ethernet and storage systems.",
      },
      {
        term: "ARQ",
        definition:
          "Automatic Repeat reQuest — an error-correction protocol where receivers request retransmission of corrupted packets.",
      },
      {
        term: "Serial Transmission",
        definition:
          "Sending one bit at a time over a single channel; used for most modern external connections (USB, Ethernet).",
      },
      {
        term: "Parallel Transmission",
        definition:
          "Sending multiple bits simultaneously over multiple channels; faster over short distances but prone to skew over long distances.",
      },
    ],
    workedExample: `**Why the Internet Uses Packet Switching:**

Scenario: You send a 1MB photo to a friend.

Circuit Switching approach:
- A dedicated path is reserved through 8 routers
- Your photo uses that path exclusively for the duration
- If one router fails, the entire transfer fails
- No one else can use those router links while you're connected

Packet Switching approach:
- Photo is divided into ~700 packets (each ~1.5KB)
- Each packet independently finds the best route:
  Packet 1: Router A → C → E → Destination
  Packet 2: Router A → B → E → Destination
  Packet 7: Router A → C → D → E → Destination
- If Router C is busy, packets automatically reroute
- All other network users can simultaneously use the same routers
- Destination TCP layer reassembles packets in correct order

---

**Parity Bit Error Detection:**

Even parity: data 1001101 → six 1s, already even → parity bit = 0
Sent: 10011010

Received: 10111010 (bit 3 flipped during transmission)
Receiver counts 1s: 1+0+1+1+1+0+1+0 = 5 (odd!) → ERROR DETECTED!
Receiver sends NAK → sender retransmits the byte.

Limitation: if two bits flip (e.g., bits 2 and 3), count stays even
→ parity gives no error signal (undetected error).`,
    resources: [
      {
        title: "Isaac Computer Science — Data Transmission",
        url: "https://isaaccomputerscience.org/topics/data_transmission",
        description:
          "IB-aligned lessons on packet switching, error detection, transmission methods, and bandwidth vs latency.",
        type: "website",
      },
      {
        title: "Khan Academy — Packets, Routing & Reliability",
        url: "https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:packets-routers-and-reliability/v/the-internet-packet-router-and-reliability",
        description:
          "Animated video explaining how packets travel across the internet and why this design is reliable.",
        type: "video",
      },
      {
        title: "BBC Bitesize — Data Transmission",
        url: "https://www.bbc.co.uk/bitesize/guides/z8bq6yc/revision/1",
        description:
          "Clear revision of serial vs parallel transmission, parity, checksums, and error correction.",
        type: "website",
      },
      {
        title: "Oxford IB CS — Data Transmission Chapter (Wajan Langfield)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "Complete coverage of transmission types, error detection/correction, and bandwidth for IB exam.",
        type: "textbook",
      },
    ],
  },

  // ─── A.3 Databases ───────────────────────────────────────────────────────────

  "A.3.1": {
    conceptExplanation: `A **database** is an organised collection of structured data managed by a **Database Management System (DBMS)**. Unlike flat files (e.g., a single spreadsheet), a database is designed for efficient querying, updating, and managing of large, related datasets.

**Why Databases Over Flat Files?**
- **No redundancy** — data is stored once, referenced many times (linked by keys rather than copied)
- **Data consistency** — changing data in one place updates it everywhere it's referenced
- **Concurrent access** — multiple users can safely access and modify data simultaneously
- **Data integrity** — constraints prevent invalid data being entered
- **Security** — role-based access control restricts who can see or modify data

**The Relational Model** (proposed by E.F. Codd, 1970) organises data into **tables** (also called *relations*):
- **Table** — a grid of rows and columns representing one entity type (e.g., Students, Books, Loans)
- **Row/Record/Tuple** — a single entry (e.g., one student's data)
- **Column/Field/Attribute** — a category of data (e.g., StudentID, Name, DateOfBirth)
- **Primary Key (PK)** — a column (or set of columns) that uniquely identifies every row in a table. Must be unique and NOT NULL. E.g., StudentID is a PK for a Students table.
- **Foreign Key (FK)** — a column in one table that references the Primary Key of another table, creating a relationship between tables.

**Relationships Between Tables:**
- **One-to-One (1:1)** — one record in Table A corresponds to exactly one record in Table B. Example: one person has one passport.
- **One-to-Many (1:N)** — one record in Table A corresponds to many records in Table B. Example: one class has many students.
- **Many-to-Many (M:N)** — records in Table A can relate to many records in Table B and vice versa. Requires a **junction/linking table**. Example: students enroll in many courses; courses have many students.

**Entity-Relationship (ER) Diagrams** visually model the structure of a database before it is built:
- **Entities** are drawn as rectangles (e.g., Student, Book)
- **Attributes** are drawn as ovals (e.g., StudentID, Title)
- **Relationships** are drawn as diamonds with crow's foot notation showing 1:1, 1:N, or M:N cardinality

**Database Design Stages:**
1. **Conceptual** — ER diagram; understand entities and their relationships
2. **Logical** — translate to relational tables; identify PKs, FKs, and attributes
3. **Physical** — implement in a specific DBMS (MySQL, PostgreSQL, SQLite); define data types, indexes`,
    keyTerms: [
      {
        term: "Database",
        definition:
          "An organised, structured collection of data managed by a DBMS, designed for efficient storage, retrieval, and manipulation.",
      },
      {
        term: "DBMS",
        definition:
          "Database Management System — software that manages database creation, querying, updating, and security (e.g., MySQL, PostgreSQL, SQLite).",
      },
      {
        term: "Table (Relation)",
        definition:
          "A structured grid of rows and columns representing one entity type in a relational database.",
      },
      {
        term: "Primary Key",
        definition:
          "A column or set of columns that uniquely identifies each row in a table. Must be unique and cannot be NULL.",
      },
      {
        term: "Foreign Key",
        definition:
          "A column in one table that references the Primary Key in another table, establishing a relationship between them.",
      },
      {
        term: "Entity",
        definition:
          "A distinct object or concept about which data is stored — represented as a table in a relational database.",
      },
      {
        term: "ER Diagram",
        definition:
          "Entity-Relationship Diagram — a visual representation of database entities, their attributes, and the relationships between them.",
      },
      {
        term: "Cardinality",
        definition:
          "The nature of the numerical relationship between tables: one-to-one (1:1), one-to-many (1:N), or many-to-many (M:N).",
      },
      {
        term: "Junction Table",
        definition:
          "A table used to resolve a many-to-many relationship by creating a row for each combination of linked records.",
      },
      {
        term: "Referential Integrity",
        definition:
          "A constraint ensuring that a foreign key value in one table always matches an existing primary key in the referenced table.",
      },
    ],
    workedExample: `**School Library Database Design:**

Entities: Book, Student, Loan

Books table:
  BookID (PK) | Title                | Author       | ISBN
  1           | "IB CS Textbook"     | W. Langfield | 978-...
  2           | "Algorithm Design"   | T. Cormen    | 978-...

Students table:
  StudentID (PK) | Name        | YearGroup
  S001           | Ana Silva   | 12
  S002           | Ben Zhao    | 11

Loans table (junction for M:N between Students and Books):
  LoanID (PK) | StudentID (FK) | BookID (FK) | LoanDate   | DueDate
  1           | S001           | 1           | 2026-01-15 | 2026-01-29
  2           | S002           | 1           | 2026-01-16 | 2026-01-30
  3           | S001           | 2           | 2026-01-20 | 2026-02-03

Relationships:
  Students 1──── N Loans (one student can have many loans)
  Books    1──── N Loans (one book can appear in many loans)
  Students M────N Books (resolved via Loans junction table)

ER Diagram (textual):
  [Student]──(has)──<LOAN>──(borrows)──[Book]
     |                                     |
  StudentID, Name, YearGroup      BookID, Title, Author`,
    resources: [
      {
        title: "Isaac Computer Science — Databases",
        url: "https://isaaccomputerscience.org/topics/databases",
        description:
          "Complete IB-aligned database content: relational model, ER diagrams, SQL, normalisation, and exam questions.",
        type: "website",
      },
      {
        title: "Khan Academy — Intro to SQL and Databases",
        url: "https://www.khanacademy.org/computing/computer-programming/sql",
        description:
          "Interactive SQL lessons starting from database concepts through to complex queries, entirely in-browser.",
        type: "video",
      },
      {
        title: "BBC Bitesize — Databases (GCSE/A-Level)",
        url: "https://www.bbc.co.uk/bitesize/guides/z8yg87h/revision/1",
        description:
          "Clear introductions to database concepts, flat files vs relational databases, and ER diagrams.",
        type: "website",
      },
      {
        title: "Oxford IB CS — Databases Chapter (Wajan Langfield)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "Full relational database coverage: ER diagrams, normalisation, SQL, and integrity constraints.",
        type: "textbook",
      },
      {
        title: "IB DP CS Guide — A.3 Databases",
        url: "https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/computer-science/",
        description:
          "Official IB learning objectives for the Databases topic (new to the 2027 syllabus).",
        type: "official",
      },
    ],
  },

  "A.3.2": {
    conceptExplanation: `**SQL (Structured Query Language)** is the standard language for interacting with relational databases. It allows you to retrieve, insert, update, and delete data, as well as define database structure.

**Data Retrieval — SELECT:**
The SELECT statement is the most-used SQL command.

\`SELECT column1, column2 FROM table WHERE condition ORDER BY column;\`

- **WHERE** filters rows based on a condition
- **ORDER BY** sorts results (ASC = ascending, DESC = descending)
- **GROUP BY** groups rows with the same value for aggregate operations
- **HAVING** filters grouped results (like WHERE but for groups)
- **DISTINCT** returns only unique values
- **LIMIT** restricts the number of returned rows

**Aggregate Functions:** COUNT(), SUM(), AVG(), MAX(), MIN() — work on groups of rows.

**Joining Tables:**
JOINs combine rows from two or more tables based on a related column:
- **INNER JOIN** — returns only rows that have matching values in BOTH tables
- **LEFT JOIN** — returns ALL rows from the left table, and matched rows from the right (NULL if no match)
- **RIGHT JOIN** — opposite of LEFT JOIN

**Data Modification:**
- **INSERT INTO** — adds new rows: \`INSERT INTO Students VALUES (S003, 'Chloe Chen', 12);\`
- **UPDATE** — modifies existing rows: \`UPDATE Students SET YearGroup = 13 WHERE StudentID = 'S001';\`
- **DELETE** — removes rows: \`DELETE FROM Students WHERE StudentID = 'S003';\`

**Data Definition:**
- **CREATE TABLE** — defines a new table with columns, data types, and constraints
- **DROP TABLE** — permanently deletes a table
- **ALTER TABLE** — modifies an existing table structure

**Constraints** enforce data integrity:
- **PRIMARY KEY** — unique identifier, not null
- **NOT NULL** — column must always have a value
- **UNIQUE** — all values in column must be different
- **FOREIGN KEY** — references a PK in another table
- **CHECK** — restricts values to a condition (e.g., Age > 0)
- **DEFAULT** — provides a default value if none is supplied`,
    keyTerms: [
      {
        term: "SQL",
        definition:
          "Structured Query Language — the standard language for managing and querying relational databases.",
      },
      {
        term: "SELECT",
        definition:
          "The SQL command for retrieving data from one or more tables, optionally with filtering, sorting, and grouping.",
      },
      {
        term: "WHERE",
        definition:
          "A SQL clause that filters rows to include only those meeting a specified condition.",
      },
      {
        term: "JOIN",
        definition:
          "A SQL operation that combines rows from two or more tables based on a related column value.",
      },
      {
        term: "INNER JOIN",
        definition:
          "Returns only rows where there is a match in both tables being joined.",
      },
      {
        term: "LEFT JOIN",
        definition:
          "Returns all rows from the left table and matching rows from the right; unmatched right rows appear as NULL.",
      },
      {
        term: "GROUP BY",
        definition:
          "Groups rows with the same value in a specified column so aggregate functions (COUNT, SUM, AVG) can be applied per group.",
      },
      {
        term: "Aggregate Function",
        definition:
          "A SQL function that computes a single value from a set of rows: COUNT(), SUM(), AVG(), MAX(), MIN().",
      },
      {
        term: "PRIMARY KEY constraint",
        definition:
          "A table constraint ensuring a column's values are unique and non-null, serving as the row's unique identifier.",
      },
      {
        term: "Foreign Key constraint",
        definition:
          "A table constraint ensuring a column's values match existing primary key values in another referenced table.",
      },
    ],
    workedExample: `**SQL Worked Examples — School Library Database:**

-- 1. Find all books borrowed by student S001:
SELECT Books.Title, Books.Author, Loans.LoanDate
FROM Loans
INNER JOIN Books ON Loans.BookID = Books.BookID
WHERE Loans.StudentID = 'S001';

Result:
Title               | Author       | LoanDate
"IB CS Textbook"    | W. Langfield | 2026-01-15
"Algorithm Design"  | T. Cormen    | 2026-01-20

-- 2. Count how many books each student has borrowed:
SELECT Students.Name, COUNT(Loans.LoanID) AS TotalLoans
FROM Students
LEFT JOIN Loans ON Students.StudentID = Loans.StudentID
GROUP BY Students.Name
ORDER BY TotalLoans DESC;

Result:
Name       | TotalLoans
Ana Silva  | 2
Ben Zhao   | 1

-- 3. Find students who have borrowed more than 1 book:
SELECT Students.Name, COUNT(Loans.LoanID) AS TotalLoans
FROM Students
INNER JOIN Loans ON Students.StudentID = Loans.StudentID
GROUP BY Students.Name
HAVING COUNT(Loans.LoanID) > 1;

Result:
Name       | TotalLoans
Ana Silva  | 2

-- 4. CREATE TABLE with constraints:
CREATE TABLE Students (
  StudentID  VARCHAR(10) PRIMARY KEY,
  Name       VARCHAR(100) NOT NULL,
  YearGroup  INT CHECK (YearGroup BETWEEN 9 AND 13),
  Email      VARCHAR(200) UNIQUE
);`,
    resources: [
      {
        title: "Khan Academy — SQL: Querying and Managing Data",
        url: "https://www.khanacademy.org/computing/computer-programming/sql",
        description:
          "Fully interactive SQL environment in the browser — write and run SQL from basic SELECT to complex JOINs.",
        type: "video",
      },
      {
        title: "Isaac Computer Science — SQL Queries",
        url: "https://isaaccomputerscience.org/topics/databases",
        description:
          "IB-focused SQL practice with SELECT, WHERE, JOIN, GROUP BY, and CREATE TABLE exercises.",
        type: "website",
      },
      {
        title: "W3Schools SQL Tutorial",
        url: "https://www.w3schools.com/sql/",
        description:
          "Interactive SQL reference and tutorials with live Try-It editor covering all major SQL commands and clauses.",
        type: "website",
      },
      {
        title: "Oxford IB CS — SQL Chapter (Wajan Langfield)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "IB-specific SQL content with exam-style questions and multi-table join examples.",
        type: "textbook",
      },
      {
        title: "Hodder IB CS — Database Operations (Paul Baumgarten)",
        url: "https://www.hoddereducation.co.uk/subjects/ib/ib-diploma/computer-science",
        description:
          "Practical SQL exercises aligned to IB command terms — great for Paper 1 preparation.",
        type: "textbook",
      },
    ],
  },

  "A.3.3": {
    conceptExplanation: `**Data integrity** ensures that data in a database is accurate, consistent, and reliable throughout its lifecycle. **Normalisation** is the systematic process of organising a database to reduce redundancy and prevent anomalies.

**Types of Data Integrity:**
- **Entity integrity** — every table must have a primary key; PK values must be unique and non-null.
- **Referential integrity** — foreign keys must reference valid, existing primary key values.
- **Domain integrity** — values in a column must conform to the defined data type and constraints (e.g., a Date column can't contain text).

**Data Validation vs Data Verification:**
- **Validation** — automated checks that data is *reasonable and correct in format*:
  - Type check: Is the value the correct data type?
  - Range check: Is the value within acceptable bounds? (Age 0–120)
  - Presence check: Has a required field been filled in?
  - Format check: Does the value match a pattern? (e.g., email format)
- **Verification** — ensuring data was entered *as intended* (e.g., typing a value twice to confirm, proofreading).

**ACID Properties** guarantee reliable database transactions:
- **Atomicity** — a transaction is all-or-nothing. If any step fails, the entire transaction is rolled back.
- **Consistency** — a transaction takes the database from one valid state to another, never breaking integrity rules.
- **Isolation** — concurrent transactions don't interfere with each other; each executes as if it were the only transaction running.
- **Durability** — once a transaction is committed, it persists even if the system crashes immediately after.

**Normalisation** structures tables to eliminate redundancy using formal forms:

**First Normal Form (1NF):**
- All columns contain atomic (indivisible) values — no multi-valued cells
- Each column has a unique name and holds values of a single type
- Each row is unique (has a primary key)

**Second Normal Form (2NF):**
- Already in 1NF
- Every non-key attribute is **fully functionally dependent** on the entire primary key (no partial dependencies)
- Applies only when the primary key is composite (more than one column)

**Third Normal Form (3NF):**
- Already in 2NF
- No **transitive dependencies** — non-key attributes must not depend on other non-key attributes

**Anomalies** (problems in un-normalised data):
- **Insertion anomaly** — can't add data without other data being present
- **Update anomaly** — changing one value requires updating multiple rows
- **Deletion anomaly** — deleting one record unintentionally removes other important information`,
    keyTerms: [
      {
        term: "Data Integrity",
        definition:
          "The accuracy, consistency, and reliability of data stored in a database throughout its lifecycle.",
      },
      {
        term: "Data Validation",
        definition:
          "Automated checks that ensure entered data is in the correct format, type, and range before it is stored.",
      },
      {
        term: "ACID",
        definition:
          "Atomicity, Consistency, Isolation, Durability — the four properties that guarantee reliable database transactions.",
      },
      {
        term: "Normalisation",
        definition:
          "The systematic process of organising database tables to reduce redundancy and eliminate data anomalies.",
      },
      {
        term: "1NF",
        definition:
          "First Normal Form — all column values are atomic (no multi-valued cells), and each row has a unique primary key.",
      },
      {
        term: "2NF",
        definition:
          "Second Normal Form — in 1NF, and every non-key attribute is fully dependent on the whole primary key (no partial dependencies).",
      },
      {
        term: "3NF",
        definition:
          "Third Normal Form — in 2NF, and no non-key attribute depends on another non-key attribute (no transitive dependencies).",
      },
      {
        term: "Functional Dependency",
        definition:
          "A relationship where the value of one attribute determines the value of another (A → B means knowing A determines B).",
      },
      {
        term: "Transitive Dependency",
        definition:
          "When a non-key attribute depends on another non-key attribute rather than directly on the primary key.",
      },
      {
        term: "Anomaly",
        definition:
          "A problem in un-normalised tables where insertion, update, or deletion of data causes inconsistency or unintended data loss.",
      },
    ],
    workedExample: `**Normalisation Worked Example — From Flat Table to 3NF:**

Original un-normalised flat table (OrderDetails):

OrderID | CustomerName | CustEmail         | ProductID | ProductName  | Qty | UnitPrice
1001    | Ana Silva    | ana@email.com     | P01       | IB Textbook  | 2   | 45.00
1001    | Ana Silva    | ana@email.com     | P02       | Calculator   | 1   | 30.00
1002    | Ben Zhao     | ben@email.com     | P01       | IB Textbook  | 1   | 45.00

Problems: Customer data repeated; ProductName/Price repeat per order.

--- STEP 1: Apply 1NF ---
→ Already atomic. Add composite PK: (OrderID, ProductID).

OrderDetails_1NF:
PK: (OrderID, ProductID) → CustomerName, CustEmail, ProductName, Qty, UnitPrice

--- STEP 2: Apply 2NF (remove partial dependencies) ---
With composite PK (OrderID, ProductID):
- CustomerName, CustEmail depend only on OrderID (partial dependency!)
- ProductName, UnitPrice depend only on ProductID (partial dependency!)
- Qty depends on the full PK (OrderID, ProductID) ✓

Split into:
Orders: OrderID (PK), CustomerName, CustEmail
Products: ProductID (PK), ProductName, UnitPrice
OrderItems: OrderID (FK), ProductID (FK), Qty ← composite PK

--- STEP 3: Apply 3NF (remove transitive dependencies) ---
In Orders: does CustEmail depend on CustomerName? No — both depend on OrderID.
Is there a transitive dependency? If CustomerID existed and Name/Email depended on it, we'd split.

Final 3NF structure:
Customers: CustomerID (PK), CustomerName, CustEmail
Orders: OrderID (PK), CustomerID (FK), OrderDate
Products: ProductID (PK), ProductName, UnitPrice
OrderItems: OrderID (FK), ProductID (FK), Qty

Now: updating a customer email → change ONE row in Customers only ✓
No anomalies possible.`,
    resources: [
      {
        title: "Isaac Computer Science — Normalisation",
        url: "https://isaaccomputerscience.org/topics/databases",
        description:
          "Step-by-step 1NF, 2NF, 3NF normalisation lessons with worked examples and IB-style questions.",
        type: "website",
      },
      {
        title: "Khan Academy — Data Integrity and Transactions",
        url: "https://www.khanacademy.org/computing/computer-programming/sql/relational-queries-in-sql/a/more-advanced-sql-queries",
        description:
          "Interactive exploration of data integrity concepts in relational databases.",
        type: "video",
      },
      {
        title: "BBC Bitesize — Normalisation",
        url: "https://www.bbc.co.uk/bitesize/guides/zncxhyc/revision/1",
        description:
          "Clear revision on 1NF, 2NF, 3NF with plain-English explanations and example tables.",
        type: "website",
      },
      {
        title:
          "Oxford IB CS — Data Integrity & Normalisation (Wajan Langfield)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "In-depth normalisation with ACID properties, anomalies, and IB exam scenarios.",
        type: "textbook",
      },
    ],
  },

  // ─── A.4 Machine Learning ─────────────────────────────────────────────────────

  "A.4.1": {
    conceptExplanation: `**Machine Learning (ML)** is a subfield of Artificial Intelligence where systems learn patterns from data and improve their performance on a task *without being explicitly programmed* for that specific task.

**Traditional Programming vs Machine Learning:**
- Traditional: programmer writes explicit rules → program produces output from input
- ML: system infers rules automatically from large amounts of labelled/unlabelled data

**Three Main Learning Paradigms:**

**1. Supervised Learning**
The model is trained on a labelled dataset — each training example has an input and a correct output (label). The model learns to map inputs to outputs.
- **Classification** — predicts a category. Example: spam filter (email → "spam" or "not spam"), disease diagnosis (symptoms → diagnosis).
- **Regression** — predicts a continuous value. Example: house price prediction, stock price forecasting.
- Algorithm example: **k-Nearest Neighbours (k-NN)** — classifies a new data point by finding the k closest training examples and taking a majority vote on their labels.

**2. Unsupervised Learning**
The model is given unlabelled data and must find patterns or structure on its own.
- **Clustering** — groups similar data points together. Example: customer segmentation, Netflix grouping users by viewing patterns.
- **Dimensionality reduction** — compresses high-dimensional data while preserving structure. Used in data visualisation.

**3. Reinforcement Learning**
An agent interacts with an environment, receives rewards or penalties for actions, and learns a strategy (policy) to maximise cumulative reward.
- Example: training an AI to play chess or Go; autonomous driving; robotics.

**Key ML Concepts:**
- **Training set** — the data used to teach the model
- **Test set** — unseen data used to evaluate the model's performance on new examples
- **Overfitting** — the model memorises training data too specifically and fails to generalise to new data. High training accuracy, low test accuracy.
- **Underfitting** — the model is too simple to capture the patterns in the data. Low accuracy on both training and test sets.
- **Bias in ML** — when training data reflects historical inequalities or collection biases, models inherit those biases. Example: a model trained on historical hiring data may discriminate against certain groups.
- **Feature selection** — choosing which input variables (features) to include in the model; irrelevant features can hurt performance.

**k-Nearest Neighbours (k-NN) Step by Step:**
1. Store all training examples with their labels
2. For a new test point, calculate its distance to every training example (e.g., Euclidean distance)
3. Find the k closest training examples (the k "nearest neighbours")
4. Take a majority vote of their labels → assign that label to the new point
5. Choice of k matters: small k = sensitive to noise; large k = smoother but slower`,
    keyTerms: [
      {
        term: "Machine Learning",
        definition:
          "A subfield of AI where algorithms learn patterns from data to make predictions or decisions without being explicitly programmed for the task.",
      },
      {
        term: "Supervised Learning",
        definition:
          "Training a model on labelled data (input-output pairs) so it learns to predict outputs for new inputs.",
      },
      {
        term: "Unsupervised Learning",
        definition:
          "Training a model on unlabelled data to discover hidden patterns or groupings without predefined outputs.",
      },
      {
        term: "Reinforcement Learning",
        definition:
          "A learning paradigm where an agent learns by interacting with an environment, receiving rewards or penalties to discover optimal strategies.",
      },
      {
        term: "Classification",
        definition:
          "A supervised learning task that predicts which category (class) a new data point belongs to.",
      },
      {
        term: "Regression",
        definition:
          "A supervised learning task that predicts a continuous numeric value for a new input.",
      },
      {
        term: "Training Data",
        definition:
          "The labelled (or unlabelled) dataset used to train a machine learning model.",
      },
      {
        term: "Overfitting",
        definition:
          "When a model learns the training data too closely, including noise, and fails to generalise well to new unseen data.",
      },
      {
        term: "k-NN",
        definition:
          "k-Nearest Neighbours — a classification algorithm that assigns a label based on the majority class among the k closest training examples.",
      },
      {
        term: "Feature",
        definition:
          "An individual measurable variable or attribute used as input to a machine learning model.",
      },
    ],
    workedExample: `**k-NN Example — Classifying a New Email as Spam:**

Training data (simplified; features: word_count, exclamation_marks):
  Email 1: [50, 1]  → NOT spam
  Email 2: [30, 8]  → SPAM
  Email 3: [40, 2]  → NOT spam
  Email 4: [25, 10] → SPAM
  Email 5: [60, 1]  → NOT spam

New email: [35, 9]

Step 1 — Calculate distances from new email to each training example:
  Distance to E1: √((35-50)² + (9-1)²) = √(225+64) = √289 = 17
  Distance to E2: √((35-30)² + (9-8)²) = √(25+1)  = √26  ≈ 5.1
  Distance to E3: √((35-40)² + (9-2)²) = √(25+49) = √74  ≈ 8.6
  Distance to E4: √((35-25)² + (9-10)²)= √(100+1) = √101 ≈ 10.1
  Distance to E5: √((35-60)² + (9-1)²) = √(625+64)= √689 ≈ 26.2

Step 2 — k=3: Find 3 nearest: E2(5.1), E3(8.6), E4(10.1)
  E2 → SPAM
  E3 → NOT spam
  E4 → SPAM

Step 3 — Majority vote: 2 SPAM, 1 NOT spam → SPAM ✓
Prediction: New email = SPAM`,
    resources: [
      {
        title: "Isaac Computer Science — Machine Learning",
        url: "https://isaaccomputerscience.org/topics/machine_learning",
        description:
          "IB-aligned lessons on supervised, unsupervised, and reinforcement learning with k-NN exercises.",
        type: "website",
      },
      {
        title: "Khan Academy — Intro to Machine Learning",
        url: "https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:program-data-and-analysis/xcae6f4a7ff015e7d:machine-learning/a/intro-to-machine-learning",
        description:
          "Visual introduction to ML concepts: what is ML, how models learn, supervised vs unsupervised.",
        type: "video",
      },
      {
        title: "BBC Bitesize — Machine Learning",
        url: "https://www.bbc.co.uk/bitesize/guides/zqh49j6/revision/1",
        description:
          "Student-friendly revision of ML types, training data, and real-world applications.",
        type: "website",
      },
      {
        title: "Oxford IB CS — Machine Learning Chapter (Wajan Langfield)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "Complete ML coverage aligned to the 2027 IB syllabus: supervised/unsupervised learning, k-NN, neural networks.",
        type: "textbook",
      },
      {
        title: "IB DP CS Official Guide — A.4 Machine Learning",
        url: "https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/computer-science/",
        description:
          "Official IB learning objectives and assessment statements for the Machine Learning topic.",
        type: "official",
      },
    ],
  },

  "A.4.2": {
    conceptExplanation: `A **neural network** is a computational model loosely inspired by the structure of biological neurons in the brain. It is the foundation of deep learning and powers modern AI in image recognition, natural language processing, and more.

**Biological vs Artificial Neurons:**
- A biological neuron receives signals through dendrites, processes them in the cell body, and fires an output signal along the axon if the total input exceeds a threshold.
- An artificial neuron (perceptron) receives numerical inputs (x₁, x₂, ...), multiplies each by a **weight** (w₁, w₂, ...), sums them up, adds a **bias** term (b), then applies an **activation function** to decide the output.

Formula: output = activation(w₁x₁ + w₂x₂ + ... + wₙxₙ + b)

**Structure of a Feedforward Neural Network:**
- **Input layer** — one neuron per input feature (e.g., pixel brightness values for an image)
- **Hidden layers** — intermediate layers that learn increasingly abstract representations
- **Output layer** — produces the final prediction (e.g., class probabilities)

Data flows from input → through hidden layers → to output in one direction only (forward). This is called **forward propagation**.

**Activation Functions** introduce non-linearity, allowing networks to model complex patterns:
- **Step function** — outputs 0 or 1 based on a threshold. Simple but not differentiable; used in early perceptrons.
- **Sigmoid** — outputs a smooth S-curve between 0 and 1. Good for binary classification output. Can suffer from vanishing gradient.
- **ReLU (Rectified Linear Unit)** — outputs max(0, x); the most widely used. Computationally efficient and avoids vanishing gradient. Outputs 0 for negative inputs, x for positive.

**Training — Backpropagation and Gradient Descent:**
1. **Forward pass** — input data flows through the network; the network makes a prediction.
2. **Calculate loss** — compare prediction to the correct label using a loss function (e.g., cross-entropy).
3. **Backward pass (backpropagation)** — the error is propagated backwards through the network. The gradient (partial derivative) of the loss with respect to each weight is computed using the chain rule.
4. **Update weights** — **gradient descent** adjusts each weight in the direction that reduces the loss: w = w - learning_rate × gradient
5. Repeat for many training examples over many **epochs** until the loss converges.

**Deep Learning** refers to neural networks with many hidden layers (depth). These networks learn hierarchical representations automatically — early layers detect edges, later layers detect shapes, final layers recognise objects.

**Convolutional Neural Networks (CNNs)** are specialised for image data:
- **Convolutional layers** scan the image with small filters to detect local patterns (edges, corners)
- **Pooling layers** reduce spatial dimensions, keeping the most important features
- **Fully connected layers** at the end classify based on detected features
- Application: MNIST handwritten digit recognition, medical imaging, facial recognition`,
    keyTerms: [
      {
        term: "Neuron (Artificial)",
        definition:
          "A computational unit that takes weighted inputs, adds a bias, applies an activation function, and produces a single output.",
      },
      {
        term: "Weight",
        definition:
          "A parameter in a neural network that scales the importance of each input to a neuron; learned during training.",
      },
      {
        term: "Bias",
        definition:
          "An additional parameter in each neuron that allows the activation function to shift, improving the model's flexibility.",
      },
      {
        term: "Activation Function",
        definition:
          "A mathematical function applied to a neuron's summed inputs to introduce non-linearity (e.g., ReLU, Sigmoid, step function).",
      },
      {
        term: "Forward Propagation",
        definition:
          "The process of passing input data through each layer of the network from input to output to generate a prediction.",
      },
      {
        term: "Backpropagation",
        definition:
          "The algorithm that computes gradients of the loss function with respect to each weight by applying the chain rule backwards through the network.",
      },
      {
        term: "Gradient Descent",
        definition:
          "An optimisation algorithm that iteratively adjusts weights in the direction that most reduces the loss function.",
      },
      {
        term: "Loss Function",
        definition:
          "A mathematical measure of how far the network's predictions are from the true labels; the quantity being minimised during training.",
      },
      {
        term: "ReLU",
        definition:
          "Rectified Linear Unit — an activation function: output = max(0, x). Most commonly used in hidden layers of deep networks.",
      },
      {
        term: "CNN",
        definition:
          "Convolutional Neural Network — a deep learning architecture specialised for grid-structured data like images, using convolutional and pooling layers.",
      },
    ],
    workedExample: `**How a CNN Recognises the Handwritten Digit '7':**

Input: 28×28 grayscale image (784 pixel brightness values 0–255)

Layer 1 — Convolutional Layer:
  - 32 filters of size 3×3 scan across the image
  - Each filter detects a specific pattern (horizontal edge, vertical edge, curve)
  - A filter responding to horizontal lines fires strongly at the top bar of '7'
  - Output: 32 feature maps showing where each pattern appears

Layer 2 — Max Pooling Layer:
  - Reduces each feature map by taking the maximum in each 2×2 region
  - Keeps the most prominent features while halving spatial dimensions
  - Makes the model robust to small shifts in position

Layer 3 — Another Convolutional Layer:
  - Combines lower-level features into higher-level ones
  - Detects the combination of "diagonal line + horizontal top" = '7' shape

Fully Connected Layers:
  - Flatten all feature maps into a 1D vector
  - Dense layer with 128 neurons: learns classification rules
  - Output layer with 10 neurons (digits 0–9): each outputs a probability

Output: [0.01, 0.01, 0.02, 0.01, 0.01, 0.01, 0.01, 0.91, 0.01, 0.01]
→ Digit 7 has probability 0.91 → network predicts '7' ✓

Training: ~60,000 labelled images from MNIST dataset.
After training: ~99% accuracy on unseen test digits.`,
    hlExtension: `**HL Extension — Mathematical Foundation of Backpropagation:**

For a single neuron with weight w, input x, bias b:
  z = w·x + b
  output ŷ = activation(z)

With loss L = (ŷ - y)² (mean squared error for one example):

To update w via gradient descent:
  ∂L/∂w = ∂L/∂ŷ · ∂ŷ/∂z · ∂z/∂w
  ∂L/∂ŷ = 2(ŷ - y)
  ∂ŷ/∂z = activation'(z)   [derivative of activation]
  ∂z/∂w = x
  ∴ ∂L/∂w = 2(ŷ - y) · activation'(z) · x

Weight update rule:
  w_new = w_old - α · ∂L/∂w
  where α (alpha) = learning rate (e.g., 0.01)

This is the chain rule applied recursively through all layers — that is backpropagation. For each layer, the gradient is computed and used to update that layer's weights. The process is repeated for every training example across many epochs until the loss converges to a minimum.`,
    resources: [
      {
        title: "3Blue1Brown — Neural Networks (YouTube)",
        url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
        description:
          "Stunning visual series explaining neural networks, gradient descent, and backpropagation — highly recommended for all students.",
        type: "video",
      },
      {
        title: "Isaac Computer Science — Neural Networks",
        url: "https://isaaccomputerscience.org/topics/machine_learning",
        description:
          "IB-aligned neural network content with diagrams, activation functions, and training explanations.",
        type: "website",
      },
      {
        title: "Khan Academy — Neural Networks",
        url: "https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:program-data-and-analysis/xcae6f4a7ff015e7d:machine-learning/a/neural-networks",
        description:
          "Accessible introduction to artificial neurons, layers, and how neural networks learn.",
        type: "video",
      },
      {
        title: "Oxford IB CS — Neural Networks Chapter (Wajan Langfield)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "Detailed coverage of network structure, activation functions, and backpropagation for IB HL students.",
        type: "textbook",
      },
      {
        title: "Hodder IB CS — Deep Learning (Paul Baumgarten)",
        url: "https://www.hoddereducation.co.uk/subjects/ib/ib-diploma/computer-science",
        description:
          "Conceptual coverage of CNNs and deep learning applications with IB command term examples.",
        type: "textbook",
      },
    ],
  },

  "A.4.3": {
    conceptExplanation: `As ML systems become woven into everyday life — hiring decisions, medical diagnoses, social media feeds, bail recommendations — their ethical implications have become one of the most important topics in Computer Science and society.

**Algorithmic Bias** occurs when an ML system produces systematically unfair outcomes for certain groups. Sources include:
- **Historical bias** — training data reflects past human discrimination. Example: a hiring algorithm trained on historical data (when fewer women held senior roles) may downrank women's CVs.
- **Measurement bias** — certain groups are underrepresented or misrepresented in training data. Example: early facial recognition systems trained predominantly on lighter-skinned faces had much higher error rates for darker-skinned faces (MIT Media Lab research, 2018).
- **Feedback loops** — a biased model makes biased decisions, which create more biased data, reinforcing the problem.

**Privacy and Data Collection:**
- ML models require vast datasets, often containing sensitive personal information (health records, location history, browsing behaviour).
- Data collection without informed consent, or re-identification of anonymised data, violates privacy rights.
- **GDPR** (EU) and similar regulations attempt to protect individuals but enforcement is challenging.

**The Black Box Problem — Transparency and Accountability:**
- Deep neural networks with billions of parameters are not interpretable — it is impossible to explain exactly why they made a specific decision.
- This is critical when ML decides who gets a loan, who is shown a job ad, or whether a medical scan shows cancer.
- **Explainable AI (XAI)** is an emerging field developing techniques to make ML decisions interpretable and auditable.

**Social and Economic Impacts:**
- **Job displacement** — ML and automation threaten jobs in transport, manufacturing, data processing, and customer service. The ILO estimates hundreds of millions of jobs globally could be affected.
- **Deepfakes** — ML-generated synthetic media (video, audio, images) that realistically portray people doing or saying things they never did. Threats: misinformation, political manipulation, non-consensual intimate imagery.
- **Environmental cost** — training large ML models (like GPT-4) requires enormous computational resources; it has been estimated to emit hundreds of tonnes of CO₂.

**Regulatory Responses:**
- **EU AI Act (2024)** — the world's first comprehensive AI regulation, classifying AI by risk level. High-risk applications (medical devices, critical infrastructure, biometric identification) face strict requirements for transparency, human oversight, and accuracy.
- **IB Ethical Framework** for evaluating ML decisions:
  - **Human rights** — does the system respect fundamental rights to privacy, non-discrimination, due process?
  - **Fairness** — are outcomes equitable across different demographic groups?
  - **Autonomy** — does the system preserve or undermine individuals' ability to make informed, free choices?
  - **Accountability** — is there a clear mechanism for redress when the system causes harm?`,
    keyTerms: [
      {
        term: "Algorithmic Bias",
        definition:
          "Systematic and unfair discrimination in ML model outputs, often caused by biased training data or flawed model design.",
      },
      {
        term: "Black Box Problem",
        definition:
          "The inability to interpret or explain the internal decision-making process of complex ML models, particularly deep neural networks.",
      },
      {
        term: "Explainable AI (XAI)",
        definition:
          "A field of AI research developing methods to make ML model decisions interpretable, transparent, and auditable by humans.",
      },
      {
        term: "Deepfake",
        definition:
          "AI-generated synthetic media that realistically depicts a person saying or doing something they never did, creating serious risks for misinformation.",
      },
      {
        term: "GDPR",
        definition:
          "General Data Protection Regulation — EU law governing personal data collection, storage, and processing; gives individuals rights over their data.",
      },
      {
        term: "EU AI Act",
        definition:
          "The EU's 2024 regulation classifying AI systems by risk level and imposing requirements for transparency, oversight, and accuracy on high-risk applications.",
      },
      {
        term: "Feedback Loop",
        definition:
          "In ML, a cycle where a biased model produces biased outcomes that generate more biased training data, reinforcing and amplifying the original bias.",
      },
      {
        term: "CIA Triad (ethical)",
        definition:
          "In the IB ethics context: Confidentiality, Integrity, Availability applied to personal data collected for ML systems.",
      },
      {
        term: "Fairness",
        definition:
          "In ML ethics, the principle that a model's predictions should not systematically disadvantage any particular demographic group.",
      },
      {
        term: "Autonomy",
        definition:
          "The ethical principle that individuals should retain the ability to understand and contest decisions made about them by automated systems.",
      },
    ],
    workedExample: `**Case Study: Algorithmic Bias in Hiring**

Scenario: A global tech company uses an ML tool to screen 50,000 CVs.

Training data: 10 years of historical hiring records.
Historical pattern in data: 85% of hired engineers were male.

Model learns (incorrectly):
  male names → higher score
  women's college names → lower score
  words like "women's chess team" → negative signal

Actual outcome (Amazon, 2018):
- System consistently rated women's CVs lower
- Amazon scrapped the tool when discovered
- Could not guarantee bias was fully removed, so discontinued

Ethical Analysis using IB framework:
  Human rights: Violated — non-discrimination is a fundamental right
  Fairness: Violated — women received systematically lower scores
  Autonomy: Reduced — applicants couldn't know why they were rejected
  Accountability: Problem — who is responsible? The company? The algorithm?

Mitigation strategies:
  1. Audit training data for demographic representation
  2. Test model outcomes across demographic groups before deployment
  3. Require human review for all shortlisted/rejected candidates
  4. Establish clear accountability chains and appeals processes
  5. Use XAI techniques to make screening decisions explainable`,
    resources: [
      {
        title: "Isaac Computer Science — Ethics and AI",
        url: "https://isaaccomputerscience.org/topics/machine_learning",
        description:
          "IB-aligned ethics content covering algorithmic bias, transparency, privacy, and regulatory frameworks.",
        type: "website",
      },
      {
        title: "Khan Academy — Impacts of AI",
        url: "https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:program-data-and-analysis/xcae6f4a7ff015e7d:machine-learning/a/machine-learning-in-the-real-world",
        description:
          "Accessible discussion of real-world AI impacts, bias, and societal implications.",
        type: "video",
      },
      {
        title: "BBC Bitesize — Ethical Issues in Computing",
        url: "https://www.bbc.co.uk/bitesize/guides/zqh49j6/revision/4",
        description:
          "Revision on AI ethics, bias, privacy, and the social impact of automation.",
        type: "website",
      },
      {
        title: "Oxford IB CS — Ethics of AI (Wajan Langfield)",
        url: "https://global.oup.com/education/product/9780198446521",
        description:
          "Comprehensive ethics chapter with case studies, IB command term analysis questions, and regulatory context.",
        type: "textbook",
      },
      {
        title: "IB DP CS Official Guide — Ethical Dimensions",
        url: "https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/computer-science/",
        description:
          "Official IB framework for evaluating ethical, social, and legal implications of computing technologies.",
        type: "official",
      },
    ],
  },
};
