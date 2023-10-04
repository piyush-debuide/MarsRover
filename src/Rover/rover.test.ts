import Rover from "./rover"
import { CompassDirections, ILocation } from "./type"

describe('Position', () => {

    const roverLocation: ILocation = {x: 2, y: 3}

    const rotateLeft = [
        {
            for: CompassDirections.N,
            expect: CompassDirections.W
        },
        {
            for: CompassDirections.W,
            expect: CompassDirections.S
        },
        {
            for: CompassDirections.S,
            expect: CompassDirections.E
        },
        {
            for: CompassDirections.E,
            expect: CompassDirections.N
        }
    ]

    rotateLeft.forEach((testItem) => it(`rotateLeft - should return ${testItem.expect} if rover's direction is ${testItem.for}`, () => {
        const rover = new Rover(roverLocation, testItem.for)
        rover.rotateLeft()
        expect(rover.getDirection()).toEqual(testItem.expect)
    }))

    const rotateRight = [
        {
            for: CompassDirections.W,
            expect: CompassDirections.N
        },
        {
            for: CompassDirections.N,
            expect: CompassDirections.E
        },
        {
            for: CompassDirections.E,
            expect: CompassDirections.S
        },
        {
            for: CompassDirections.S,
            expect: CompassDirections.W
        }
    ]

    rotateRight.forEach((testItem) => it(`rotateRight- should return ${testItem.expect} if rover's direction is ${testItem.for}`, () => {
        const rover = new Rover(roverLocation, testItem.for)
        rover.rotateRight()
        expect(rover.getDirection()).toEqual(testItem.expect)
    }))


    const move = [
        {
            for: CompassDirections.N,
            do: 'increment y',
            expect: {x: 2, y: 4}
        },
        {
            for: CompassDirections.E,
            do: 'increment x',
            expect: {x: 3, y: 3}
        },
        {
            for: CompassDirections.S,
            do: 'decrement y',
            expect: {x: 2, y: 2}
        },
        {
            for: CompassDirections.W,
            do: 'decrement x',
            expect: {x: 1, y: 3}
        },
    ]

    move.forEach((testItem) => it(`move - should ${testItem.do} coordinate by 1 if current direction is ${testItem.for}`, () => {
        const rover = new Rover(roverLocation, testItem.for)
        rover.move()
        expect(rover.getLocation()).toEqual(testItem.expect);
    }))
})