

export function colSize(winWidth:number, span:number) {
    let segmentSize = winWidth ? Math.floor((winWidth - 276) / 10) : 50;
    return segmentSize * span + 12 * (span - 1)
}
export function rowSize(winHeight:number, span:number) {
    let segmentSize = winHeight ? Math.floor((winHeight - 276) / 10) : 50;
    return segmentSize * span + 12 * (span - 1)
}