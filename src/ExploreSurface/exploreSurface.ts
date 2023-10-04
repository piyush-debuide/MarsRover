import Rover from "../Rover/rover";
import { CompassDirections } from "../Rover/type";
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
            if(!this.commands[index as keyof ICommands]) {
                throw new Error(`Invalid Command ${index}`)
            }
            this.commands[index as keyof ICommands]()
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

const rover = new Rover({x:3, y:4}, CompassDirections.N)
const explore = new ExploreSurface({horizontalLength: 10, verticalLength: 10}, rover)
