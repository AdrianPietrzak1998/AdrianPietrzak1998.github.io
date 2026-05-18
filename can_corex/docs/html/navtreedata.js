/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "CAN CoreX", "index.html", [
    [ "Overview", "index.html#autotoc_md1", null ],
    [ "Examples", "index.html#autotoc_md2", null ],
    [ "Table of Contents", "index.html#autotoc_md3", null ],
    [ "Core CAN Model", "index.html#autotoc_md5", [
      [ "What You Actually Work With", "index.html#autotoc_md6", null ],
      [ "Why It Matters", "index.html#autotoc_md7", null ],
      [ "Core Features", "index.html#autotoc_md8", null ],
      [ "Minimal Example", "index.html#autotoc_md9", null ]
    ] ],
    [ "ISO-TP", "index.html#autotoc_md11", [
      [ "Why It Is Important Here", "index.html#autotoc_md12", null ],
      [ "What You Get", "index.html#autotoc_md13", null ],
      [ "Practical Integration Model", "index.html#autotoc_md14", null ]
    ] ],
    [ "Bus Monitoring &amp; Statistics", "index.html#autotoc_md16", null ],
    [ "Quick Start", "index.html#autotoc_md18", null ],
    [ "API Reference", "index.html#autotoc_md20", [
      [ "Initialization and Configuration", "index.html#autotoc_md21", [
        [ "<span class=\"tt\">CCX_Init</span>", "index.html#autotoc_md22", null ],
        [ "<span class=\"tt\">CCX_FD_LenToDLC</span> / <span class=\"tt\">CCX_MsgPayloadLen</span> (CAN FD builds only)", "index.html#autotoc_md24", null ],
        [ "<span class=\"tt\">CCX_RX_RebuildHash</span>", "index.html#autotoc_md26", null ],
        [ "Primary Tick Registration", "index.html#autotoc_md28", null ],
        [ "High-Resolution Tick Registration", "index.html#autotoc_md29", null ],
        [ "Timebase Type Configuration", "index.html#autotoc_md30", null ]
      ] ],
      [ "Message Operations", "index.html#autotoc_md32", [
        [ "<span class=\"tt\">CCX_RX_PushMsg</span>", "index.html#autotoc_md33", null ],
        [ "<span class=\"tt\">CCX_TX_PushMsg</span>", "index.html#autotoc_md35", null ],
        [ "<span class=\"tt\">CCX_Poll</span>", "index.html#autotoc_md37", null ]
      ] ]
    ] ],
    [ "Utilities", "index.html#autotoc_md39", [
      [ "Classic SLCAN", "index.html#autotoc_md40", null ],
      [ "Hex Helpers", "index.html#autotoc_md41", null ],
      [ "Linear Encode / Decode", "index.html#autotoc_md42", null ]
    ] ],
    [ "Error Codes", "index.html#autotoc_md44", null ],
    [ "Data Structures", "index.html#autotoc_md46", [
      [ "<span class=\"tt\">CCX_message_t</span>", "index.html#autotoc_md47", null ],
      [ "<span class=\"tt\">CCX_RX_table_t</span>", "index.html#autotoc_md49", null ],
      [ "<span class=\"tt\">CCX_TX_table_t</span>", "index.html#autotoc_md51", null ]
    ] ],
    [ "Usage Examples", "index.html#autotoc_md53", [
      [ "Basic Setup", "index.html#autotoc_md54", null ],
      [ "RX Table with Timeout", "index.html#autotoc_md56", null ],
      [ "TX Table for Periodic Messages", "index.html#autotoc_md58", null ],
      [ "Network Replication", "index.html#autotoc_md60", null ]
    ] ],
    [ "ISO-TP Transport Protocol", "index.html#autotoc_md62", [
      [ "Features", "index.html#autotoc_md63", null ],
      [ "Important Semantics", "index.html#autotoc_md64", null ],
      [ "Basic Usage", "index.html#autotoc_md65", [
        [ "Transmitter Node (Sending ISO-TP Messages)", "index.html#autotoc_md66", null ],
        [ "CAN FD ISO-TP Example", "index.html#autotoc_md67", null ],
        [ "Receiver Node (Receiving ISO-TP Messages)", "index.html#autotoc_md68", null ],
        [ "CAN FD ISO-TP Receiver Example", "index.html#autotoc_md69", null ]
      ] ],
      [ "Flow Control Frame Layout (ISO 15765-2)", "index.html#autotoc_md70", null ],
      [ "Config Init Helpers", "index.html#autotoc_md71", null ],
      [ "Abort and Timeout Diagnostics", "index.html#autotoc_md72", null ],
      [ "Progress Monitoring", "index.html#autotoc_md73", null ],
      [ "Extended ID Support", "index.html#autotoc_md74", null ],
      [ "Limitations", "index.html#autotoc_md75", null ]
    ] ],
    [ "Wildcard DLC Matching", "index.html#autotoc_md77", [
      [ "Overview", "index.html#autotoc_md78", null ],
      [ "<span class=\"tt\">CCX_DLC_ANY</span> value", "index.html#autotoc_md79", null ],
      [ "Classic build wildcard", "index.html#autotoc_md80", null ],
      [ "FD build wildcard with frame-format filter", "index.html#autotoc_md81", null ],
      [ "Exact-DLC entries", "index.html#autotoc_md82", null ],
      [ "Use Cases", "index.html#autotoc_md83", null ],
      [ "Important Notes", "index.html#autotoc_md84", null ]
    ] ],
    [ "Detailed Bus Management &amp; Statistics", "index.html#autotoc_md86", [
      [ "Global Statistics", "index.html#autotoc_md87", null ],
      [ "Queue State Helpers", "index.html#autotoc_md88", null ],
      [ "Bus Monitoring", "index.html#autotoc_md89", null ]
    ] ],
    [ "Advanced Build-Time Options", "index.html#autotoc_md91", null ],
    [ "Best Practices", "index.html#autotoc_md92", [
      [ "1. Always Register Tick Source First", "index.html#autotoc_md93", null ],
      [ "2. Handle Return Codes", "index.html#autotoc_md94", null ],
      [ "3. Call Poll Regularly", "index.html#autotoc_md95", null ],
      [ "4. Validate DLC Before Creating Messages", "index.html#autotoc_md96", null ],
      [ "5. Initialize Tables Properly", "index.html#autotoc_md97", null ],
      [ "6. Use Timeouts for Critical Messages", "index.html#autotoc_md98", null ],
      [ "7. Buffer Sizing", "index.html#autotoc_md99", null ]
    ] ],
    [ "Timing Considerations", "index.html#autotoc_md101", [
      [ "Tick Resolution", "index.html#autotoc_md102", null ],
      [ "Poll Frequency", "index.html#autotoc_md103", null ],
      [ "Timeout Accuracy", "index.html#autotoc_md104", null ]
    ] ],
    [ "Thread Safety", "index.html#autotoc_md106", [
      [ "Option 1: Single Thread Access", "index.html#autotoc_md107", null ],
      [ "Option 2: Mutex Protection", "index.html#autotoc_md108", null ]
    ] ],
    [ "Limitations", "index.html#autotoc_md110", null ],
    [ "License", "index.html#autotoc_md112", null ],
    [ "Author", "index.html#autotoc_md113", null ],
    [ "Changelog", "index.html#autotoc_md114", [
      [ "Current Release: v2.3.0 (2026-05-18)", "index.html#autotoc_md115", null ],
      [ "Previous Release: v2.2.2 (2026-04-26)", "index.html#autotoc_md116", null ],
      [ "Previous Release: v2.2.1 (2026-04-24)", "index.html#autotoc_md117", null ],
      [ "Previous Release: v2.2.0 (2026-04-21)", "index.html#autotoc_md118", null ],
      [ "Previous Release: v2.1.0 (2026-04-19)", "index.html#autotoc_md119", null ],
      [ "Previous Release: v2.0.0 (2026-04-18)", "index.html#autotoc_md120", null ],
      [ "v1.4.4 (2026-04-01)", "index.html#autotoc_md121", null ],
      [ "Previous Release: v1.4.3 (2026-02-13)", "index.html#autotoc_md122", null ],
      [ "Previous Release: v1.4.2 (2026-02-10)", "index.html#autotoc_md123", null ],
      [ "Previous Release: v1.4.1 (2026-02-05)", "index.html#autotoc_md124", null ],
      [ "Previous Release: v1.4.0 (2026-02-05)", "index.html#autotoc_md125", null ],
      [ "Previous Release: v1.3.0 (2026-01-27)", "index.html#autotoc_md126", null ],
      [ "Previous Release: v1.2.0 (2026-01-26)", "index.html#autotoc_md127", null ],
      [ "Previous Release: v1.1.0 (2026-01-22)", "index.html#autotoc_md128", null ],
      [ "Initial Release: v1.0.0 (2025-04-26)", "index.html#autotoc_md129", null ]
    ] ],
    [ "Topics", "topics.html", "topics" ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", "annotated_dup" ],
      [ "Data Structure Index", "classes.html", null ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", null ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "Globals", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"struct_c_c_x__net__node__t.html"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';