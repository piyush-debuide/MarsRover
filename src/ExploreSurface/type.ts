export interface ISurface {
    horizontalLength: number;
    verticalLength: number;
}

export interface ICommands {
    L: () => void;
    R: () => void;
    M: () => void;
}