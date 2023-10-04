import Rover from "../Rover/rover";
import { ICommands, ISurface } from "./type";

export default class ExploreSurface {
    private surface: ISurface;
    private rover: Rover;
    private commands: ICommands;

    constructor(surface: ISurface, rover: Rover) {
        this.surface = surface;
        this.rover = rover;
        this.validate();
        this.commands = {
            'L': () => rover.rotateLeft(),
            'R': () => rover.rotateRight(),
            'M': () => {
                rover.move();
                this.validate();
            }
        };
    }

    execute(instruction: string) {
        const instructions = [...instruction]
        instructions.forEach((index: string) => {
            this.commands[index]()
        })
    }

    private validate() {
        const {x, y} = this.rover.getLocation()
        const {horizontalLength, verticalLength} = this.surface
        if(x > horizontalLength || y > verticalLength || y < 0 || x < 0) {
            throw new Error('Out of Bounds')
        }
    }
}