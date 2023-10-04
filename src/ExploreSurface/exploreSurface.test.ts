import Rover from "../Rover/rover"
import { CompassDirections } from "../Rover/type"
import ExploreSurface from "./exploreSurface"

describe('Commands', () => {
    const roverLocation = {x: 5, y: 6}
    const surface = {horizontalLength: 10, verticalLength: 12}

    it('rover should turn left on L command', () => {
        const rover = new Rover(roverLocation, CompassDirections.W)
        const exploreSurface = new ExploreSurface(surface, rover)
        exploreSurface.execute('L')
        expect(rover.getDirection()).toEqual(CompassDirections.S)
    })

    it('rover should turn left on R command', () => {
        const rover = new Rover(roverLocation, CompassDirections.W)
        const exploreSurface = new ExploreSurface(surface, rover)
        exploreSurface.execute('R')
        expect(rover.getDirection()).toEqual(CompassDirections.N)
    })

    it('rover should move on M command', () => {
        const rover = new Rover(roverLocation, CompassDirections.W)
        const exploreSurface = new ExploreSurface(surface, rover)
        exploreSurface.execute('M')
        expect(rover.getLocation()).toEqual({x: 4, y: 6})
    })

    it('rover should execute instructions as expected', () => {
        const rover = new Rover(roverLocation, CompassDirections.W)
        const exploreSurface = new ExploreSurface(surface, rover)
        exploreSurface.execute('LMRM')
        expect(rover.getDirection()).toEqual(CompassDirections.W)
        expect(rover.getLocation()).toEqual({x: 4, y: 5})
    })
})

describe('Validation', () => {
    const newRoverLocation = {x: 2, y: 3}
    const newSurface = {horizontalLength: 5, verticalLength: 6}

    const validate = [
        {
            for: CompassDirections.E,
            condition: 'rover crosses horizontal length of surface'
        },
        {
            for: CompassDirections.N,
            condition: 'rover crosses vertical length of surface'
        },
        {
            for: CompassDirections.S,
            condition: `rover's location is below 0 on y axis`
        },
        {
            for: CompassDirections.W,
            condition: `rover's location is below 0 on x axis`
        }
    ]

    validate.forEach((testItem) => it(`Should throw error if ${testItem.condition}`, () => {
        const rover = new Rover(newRoverLocation, testItem.for)
        const exploreSurface = new ExploreSurface(newSurface, rover)
        expect(() => exploreSurface.execute('MMMM')).toThrow('Out of Bounds')
    }))

    it(`Should throw error if rover's current location is not valid on instantiating exploreSurface`, () => {
        const invalidRoverLocation = {x: -1, y: 3}
        const rover = new Rover(invalidRoverLocation, CompassDirections.W)
        expect(() => new ExploreSurface(newSurface, rover)).toThrow('Out of Bounds')
    })
})