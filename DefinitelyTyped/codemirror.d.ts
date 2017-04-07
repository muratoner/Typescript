interface CodeMirrorScrollInfo {
    x: number;
    y: number;
    width: number;
    height: number;
}

interface CodeMirrorCoords {
    x: number;
    y: number;
    yBot: number;
}

interface CodeMirrorPosition {
    line: number;
    ch: number;
}

interface CodeMirrorHistorySize {
    undo: number;
    redo: number;
}

interface CodeMirrorToken {
    start: number;
    end: number;
    string: string;
    className: string;
    state: any;
}

interface CodeMirrorMarkTextOptions {
    inclusiveLeft: boolean;
    inclusiveRight: boolean;
    startStype: string;
    endStyle: string;
}

interface CodeMirrorBookMark {
    clear(): void;
    find(): CodeMirrorPosition;
}

interface CodeMirrorLineHandle {

}

interface CodeMirrorLineInfo {
    line: number;
    handler: CodeMirrorLineHandle;
    text: string;
    markerText: string;
    markerClass: string;
    lineClass: string;
    bgClass: string;
}

interface CodeMirrorViewPort {
    from: number;
    to: number;
}

interface CodeMirrorChange {
    from: CodeMirrorPosition;
    to: CodeMirrorPosition;
    text: string[];
    next: CodeMirrorChange;
}

interface CodeMirrorChangeListener {
    (editor: CodeMirrorEditor, change: CodeMirrorChange): void;
}

interface CodeMirrorViewPortChangeListener {
    (editor: CodeMirrorEditor, from: CodeMirrorPosition, to: CodeMirrorPosition): void;
}

interface CodeMirrorStream {
    eol(): boolean;
    sol(): boolean;
    peek(): string;
    next(): string;
    eat(match: any): string;
    eatWhile(match: any): boolean;
    eatSpace(): boolean;
    skipToEnd(): void;
    skipTo(ch: string): boolean;
    match(pattern: RegExp, consume: boolean, caseFold: boolean): boolean;
    backUp(n: number): void;
    column(): number;
    indentation(): number;
    current(): string;
    string: string;
    pos: number;
}

interface CodeMirrorModeDefition {
    (options: CodeMirrorOptions, modeOptions: any): CodeMirrorMode;
}

interface CodeMirrorMode {
    startState(): any;
    token(stream: CodeMirrorStream, state: any): string;
    blankLine?(state: any): string;
    copyState?(state: any): any;
    indent?(state: any, textAfter: string, text: String): number;
    electricChars?: string;
}

interface CodeMirrorEditor {
    getValue(): string;
    setValue(valu: string): void;
    getSelection(): string;
    replaceSelection(value: string): void;
    setSize(width: number, height: number): void;
    focus(): void;
    scrollTo(x: number, y: number): void;
    getScrollInfo(): CodeMirrorScrollInfo;
    setOption(option: string, value: any);
    getOption(option: string): any;
    getMode(): CodeMirrorMode;
    cursorCoords(start: boolean, mode: string): CodeMirrorCoords;
    charCoords(pos: CodeMirrorPosition, mode: string): CodeMirrorCoords;
    undo(): void;
    redo(): void;
    historySize(): CodeMirrorHistorySize;
    clearHistory(): void;
    getHistory(): any;
    setHistory(history: any);
    indentLine(line: number, dir?: boolean);
    getTokenAt(pos: CodeMirrorPosition): CodeMirrorToken;
    markText(from: CodeMirrorPosition, to: CodeMirrorPosition, className: string,
        option?: CodeMirrorMarkTextOptions): CodeMirrorBookMark;
    setBookmark(pos: CodeMirrorPosition): CodeMirrorBookMark;
    findMarksAt(pos: CodeMirrorPosition): CodeMirrorBookMark[];
    setMarker(line: number, text: string, className: string): CodeMirrorLineHandle;
    clarMarker(line: number): void;
    setLineClass(line: number, className: string, backgroundClassName: string): CodeMirrorLineHandle;
    hideLine(line: number): CodeMirrorLineHandle;
    showLine(line: number): CodeMirrorLineHandle;
    onDeleteLine(line: number, callBack: Function);
    lineInfo(line: number): CodeMirrorLineInfo;
    getLineHandler(line: number): CodeMirrorLineHandle;
    getViewPort(): CodeMirrorViewPort;
    addWidget(pos: CodeMirrorPosition, node: Node, scrollIntoView: boolean);
    matchBrackets(): void;
    lineCount(): number;
    getCursor(start?: boolean): CodeMirrorPosition;
    somethingSelected(): boolean;
    setCursor(pos: CodeMirrorPosition): void;
    setSelection(start: CodeMirrorPosition, end: CodeMirrorPosition): void;
    getLine(n: number): string;
    setLine(n: string, text: string): void;
    removeLine(n: number): void;
    getRange(from: CodeMirrorPosition, to: CodeMirrorPosition): string;
    replaceRange(text: string, from: CodeMirrorPosition, to?: CodeMirrorPosition): void;
    posFromIndex(index: number): CodeMirrorPosition;
    indexFromPos(pos: CodeMirrorPosition): number;
    operation(func: Function): any;
    compundChange(func: Function): any;
    refresh(): void;
    getInputField(): HTMLTextAreaElement;
    getWrapperElement(): HTMLElement;
    getScrollerElement(): HTMLElement;
    getGutterElement(): HTMLElement;
    getStateAfter(line): any;
}

interface CodeMirrorOptions {
    value?: string;
    mode?: string;
    them?: string;
    indentUnit?: number;
    smartIndend?: number;
    tabSize?: number;
    indentWithTabs?: boolean;
    electricsChars?: boolean;
    autoClearEmptyLines?: boolean;
    keyMap?: string;
    extraKeys?: any;
    lineWrapping?: boolean;
    lineNumbers?: boolean;
    firstLineNumber?: boolean;
    lineNumberFormatter?: Function;
    gutter?: boolean;
    fixedGutter?: boolean;
    readOnly?: boolean;
    onChange?: CodeMirrorChangeListener;
    onCursorActivity?: Function;
    onViewportChange?: CodeMirrorViewPortChangeListener;
    //**todo finish
}

declare var CodeMirror: {
    (element: HTMLElement, options: CodeMirrorOptions): CodeMirrorEditor;
    version: string;
    defaults: CodeMirrorOptions;
    fromTextArea(textArea: HTMLTextAreaElement, options: CodeMirrorOptions): CodeMirrorEditor;
    defineMode(name: string, func: CodeMirrorModeDefition);
    defineMIME(mime: string, mode: string);
    connect(target: EventTarget, event: String, func: Function);
    commands: any;
}
