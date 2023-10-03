import Rover from "./rover"
import { ILocation } from "./type"

describe('Position', () => {

    const roverLocation: ILocation = {x: 2, y: 3}

    it(`rotateLeft - should return 'W' if rover's direction is N`, () => {
        const rover = new Rover(roverLocation, 'N')
        rover.rotateLeft()
        expect(rover.getDirection()).toEqual('W')
    })

    it(`rotateLeft- should return 'S' if rover's direction is W`, () => {
        const rover = new Rover(roverLocation, 'W')
        rover.rotateLeft()
        expect(rover.getDirection()).toEqual('S')
    })

    it(`rotateLeft- should return 'E' if rover's direction is S`, () => {
        const rover = new Rover(roverLocation, 'S')
        rover.rotateLeft()
        expect(rover.getDirection()).toEqual('E')
    })

    it(`rotateLeft- should return 'N' if rover's direction is E`, () => {
        const rover = new Rover(roverLocation, 'E')
        rover.rotateLeft()
        expect(rover.getDirection()).toEqual('N')
    })

    it(`rotateRight- should return 'N' if rover's direction is W`, () => {
        const rover = new Rover(roverLocation, 'W')
        rover.rotateRight()
        expect(rover.getDirection()).toEqual('N')
    })

    it(`rotateRight- should return 'E' if rover's direction is N`, () => {
        const rover = new Rover(roverLocation, 'N')
        rover.rotateRight()
        expect(rover.getDirection()).toEqual('E')
    })

    it(`rotateRight- should return 'S' if rover's direction is E`, () => {
        const rover = new Rover(roverLocation, 'E')
        rover.rotateRight()
        expect(rover.getDirection()).toEqual('S')
    })

    it(`rotateRight- should return 'W' if rover's direction is S`, () => {
        const rover = new Rover(roverLocation, 'S')
        rover.rotateRight()
        expect(rover.getDirection()).toEqual('W')
    })

    it(`move - should increment y coordinate by 1 if current direction is N`, () => {
        const rover = new Rover(roverLocation, 'N')
        rover.move()
        expect(rover.getLocation()).toEqual({x: 2, y: 4});
    })

    it(`move - should increment x coordinate by 1 if current direction is E`, () => {
        const rover = new Rover(roverLocation, 'E')
        rover.move()
        expect(rover.getLocation()).toEqual({x: 3, y: 3});
    })

    it(`move - should decrement y coordinate by 1 if current direction is S`, () => {
        const rover = new Rover(roverLocation, 'S')
        rover.move()
        expect(rover.getLocation()).toEqual({x: 2, y: 2});
    })

    it(`move - should decrement x coordinate by 1 if current direction is W`, () => {
        const rover = new Rover(roverLocation, 'W')
        rover.move()
        expect(rover.getLocation()).toEqual({x: 1, y: 3});
    })
})