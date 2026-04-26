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
    [ "Table of Contents", "index.html#autotoc_md2", null ],
    [ "Core CAN Model", "index.html#autotoc_md4", [
      [ "What You Actually Work With", "index.html#autotoc_md5", null ],
      [ "Why It Matters", "index.html#autotoc_md6", null ],
      [ "Core Features", "index.html#autotoc_md7", null ],
      [ "Minimal Example", "index.html#autotoc_md8", null ]
    ] ],
    [ "ISO-TP", "index.html#autotoc_md10", [
      [ "Why It Is Important Here", "index.html#autotoc_md11", null ],
      [ "What You Get", "index.html#autotoc_md12", null ],
      [ "Practical Integration Model", "index.html#autotoc_md13", null ]
    ] ],
    [ "Bus Monitoring &amp; Statistics", "index.html#autotoc_md15", null ],
    [ "Quick Start", "index.html#autotoc_md17", null ],
    [ "API Reference", "index.html#autotoc_md19", [
      [ "Initialization and Configuration", "index.html#autotoc_md20", [
        [ "<span class=\"tt\">CCX_Init</span>", "index.html#autotoc_md21", null ],
        [ "<span class=\"tt\">CCX_FD_LenToDLC</span> / <span class=\"tt\">CCX_MsgPayloadLen</span> (CAN FD builds only)", "index.html#autotoc_md23", null ],
        [ "<span class=\"tt\">CCX_RX_RebuildHash</span>", "index.html#autotoc_md25", null ],
        [ "Primary Tick Registration", "index.html#autotoc_md27", null ],
        [ "High-Resolution Tick Registration", "index.html#autotoc_md28", null ],
        [ "Timebase Type Configuration", "index.html#autotoc_md29", null ]
      ] ],
      [ "Message Operations", "index.html#autotoc_md31", [
        [ "<span class=\"tt\">CCX_RX_PushMsg</span>", "index.html#autotoc_md32", null ],
        [ "<span class=\"tt\">CCX_TX_PushMsg</span>", "index.html#autotoc_md34", null ],
        [ "<span class=\"tt\">CCX_Poll</span>", "index.html#autotoc_md36", null ]
      ] ]
    ] ],
    [ "Error Codes", "index.html#autotoc_md38", null ],
    [ "Data Structures", "index.html#autotoc_md40", [
      [ "<span class=\"tt\">CCX_message_t</span>", "index.html#autotoc_md41", null ],
      [ "<span class=\"tt\">CCX_RX_table_t</span>", "index.html#autotoc_md43", null ],
      [ "<span class=\"tt\">CCX_TX_table_t</span>", "index.html#autotoc_md45", null ]
    ] ],
    [ "Usage Examples", "index.html#autotoc_md47", [
      [ "Basic Setup", "index.html#autotoc_md48", null ],
      [ "RX Table with Timeout", "index.html#autotoc_md50", null ],
      [ "TX Table for Periodic Messages", "index.html#autotoc_md52", null ],
      [ "Network Replication", "index.html#autotoc_md54", null ]
    ] ],
    [ "ISO-TP Transport Protocol", "index.html#autotoc_md56", [
      [ "Features", "index.html#autotoc_md57", null ],
      [ "Important Semantics", "index.html#autotoc_md58", null ],
      [ "Basic Usage", "index.html#autotoc_md59", [
        [ "Transmitter Node (Sending ISO-TP Messages)", "index.html#autotoc_md60", null ],
        [ "CAN FD ISO-TP Example", "index.html#autotoc_md61", null ],
        [ "Receiver Node (Receiving ISO-TP Messages)", "index.html#autotoc_md62", null ],
        [ "CAN FD ISO-TP Receiver Example", "index.html#autotoc_md63", null ]
      ] ],
      [ "Flow Control Frame Layout (ISO 15765-2)", "index.html#autotoc_md64", null ],
      [ "Config Init Helpers", "index.html#autotoc_md65", null ],
      [ "Abort and Timeout Diagnostics", "index.html#autotoc_md66", null ],
      [ "Progress Monitoring", "index.html#autotoc_md67", null ],
      [ "Extended ID Support", "index.html#autotoc_md68", null ],
      [ "Limitations", "index.html#autotoc_md69", null ]
    ] ],
    [ "Wildcard DLC Matching", "index.html#autotoc_md71", [
      [ "Overview", "index.html#autotoc_md72", null ],
      [ "<span class=\"tt\">CCX_DLC_ANY</span> value", "index.html#autotoc_md73", null ],
      [ "Classic build wildcard", "index.html#autotoc_md74", null ],
      [ "FD build wildcard with frame-format filter", "index.html#autotoc_md75", null ],
      [ "Exact-DLC entries", "index.html#autotoc_md76", null ],
      [ "Use Cases", "index.html#autotoc_md77", null ],
      [ "Important Notes", "index.html#autotoc_md78", null ]
    ] ],
    [ "Detailed Bus Management &amp; Statistics", "index.html#autotoc_md80", [
      [ "Global Statistics", "index.html#autotoc_md81", null ],
      [ "Queue State Helpers", "index.html#autotoc_md82", null ],
      [ "Bus Monitoring", "index.html#autotoc_md83", null ]
    ] ],
    [ "Advanced Build-Time Options", "index.html#autotoc_md85", null ],
    [ "Best Practices", "index.html#autotoc_md86", [
      [ "1. Always Register Tick Source First", "index.html#autotoc_md87", null ],
      [ "2. Handle Return Codes", "index.html#autotoc_md88", null ],
      [ "3. Call Poll Regularly", "index.html#autotoc_md89", null ],
      [ "4. Validate DLC Before Creating Messages", "index.html#autotoc_md90", null ],
      [ "5. Initialize Tables Properly", "index.html#autotoc_md91", null ],
      [ "6. Use Timeouts for Critical Messages", "index.html#autotoc_md92", null ],
      [ "7. Buffer Sizing", "index.html#autotoc_md93", null ]
    ] ],
    [ "Timing Considerations", "index.html#autotoc_md95", [
      [ "Tick Resolution", "index.html#autotoc_md96", null ],
      [ "Poll Frequency", "index.html#autotoc_md97", null ],
      [ "Timeout Accuracy", "index.html#autotoc_md98", null ]
    ] ],
    [ "Thread Safety", "index.html#autotoc_md100", [
      [ "Option 1: Single Thread Access", "index.html#autotoc_md101", null ],
      [ "Option 2: Mutex Protection", "index.html#autotoc_md102", null ]
    ] ],
    [ "Limitations", "index.html#autotoc_md104", null ],
    [ "License", "index.html#autotoc_md106", null ],
    [ "Author", "index.html#autotoc_md107", null ],
    [ "Changelog", "index.html#autotoc_md108", [
      [ "Current Release: v2.2.2 (2026-04-26)", "index.html#autotoc_md109", null ],
      [ "Previous Release: v2.2.1 (2026-04-24)", "index.html#autotoc_md110", null ],
      [ "Previous Release: v2.2.0 (2026-04-21)", "index.html#autotoc_md111", null ],
      [ "Previous Release: v2.1.0 (2026-04-19)", "index.html#autotoc_md112", null ],
      [ "Previous Release: v2.0.0 (2026-04-18)", "index.html#autotoc_md113", null ],
      [ "v1.4.4 (2026-04-01)", "index.html#autotoc_md114", null ],
      [ "Previous Release: v1.4.3 (2026-02-13)", "index.html#autotoc_md115", null ],
      [ "Previous Release: v1.4.2 (2026-02-10)", "index.html#autotoc_md116", null ],
      [ "Previous Release: v1.4.1 (2026-02-05)", "index.html#autotoc_md117", null ],
      [ "Previous Release: v1.4.0 (2026-02-05)", "index.html#autotoc_md118", null ],
      [ "Previous Release: v1.3.0 (2026-01-27)", "index.html#autotoc_md119", null ],
      [ "Previous Release: v1.2.0 (2026-01-26)", "index.html#autotoc_md120", null ],
      [ "Previous Release: v1.1.0 (2026-01-22)", "index.html#autotoc_md121", null ],
      [ "Initial Release: v1.0.0 (2025-04-26)", "index.html#autotoc_md122", null ]
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
"annotated.html"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';