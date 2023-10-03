import { ILocation } from "./type";

export default class Rover {
    private location: ILocation;
    private direction: string;
    private compassDirections = ['N', 'E', 'S', 'W'];
    constructor(location: ILocation, direction: string) {
        this.location = {...location};
        this.direction = direction;
    }

    getLocation() {
        return this.location;
    }

    getDirection() {
        return this.direction;
    }

    rotateLeft() {
        const directionIndex = this.compassDirections.indexOf(this.direction);
        if(directionIndex === 0) {
            this.direction = this.compassDirections[this.compassDirections.length - 1];
            return;
        }
        this.direction = this.compassDirections[directionIndex-1];
        return;
    }

    rotateRight() {
        const directionIndex = this.compassDirections.indexOf(this.direction);
        if(directionIndex === this.compassDirections.length - 1) {
            this.direction = this.compassDirections[0];
            return;
        }
        this.direction = this.compassDirections[directionIndex+1];
        return;
    }

    move() {
        if(this.direction === 'N') {
            this.location.y = this.location.y + 1
        }
        else if(this.direction === 'E') {
            this.location.x = this.location.x + 1
        }
        else if(this.direction === 'S') {
            this.location.y = this.location.y - 1
        }
        else if(this.direction === 'W') {
            this.location.x = this.location.x - 1
        }
    }
}