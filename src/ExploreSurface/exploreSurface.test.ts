import Rover from "../Rover/rover"
import ExploreSurface from "./exploreSurface"

describe('ExploreSurface', () => {
    const roverLocation = {x: 5, y: 6}
    const surface = {horizontalLength: 10, verticalLength: 12}
    it('rover should turn left on L command', () => {
        const rover = new Rover(roverLocation, 'W')
        const exploreSurface = new ExploreSurface(surface, rover)
        exploreSurface.execute('L')
        expect(rover.getDirection()).toEqual('S')
    })

    it('rover should turn left on R command', () => {
        const rover = new Rover(roverLocation, 'W')
        const exploreSurface = new ExploreSurface(surface, rover)
        exploreSurface.execute('R')
        expect(rover.getDirection()).toEqual('N')
    })

    it('rover should move on M command', () => {
        const rover = new Rover(roverLocation, 'W')
        const exploreSurface = new ExploreSurface(surface, rover)
        exploreSurface.execute('M')
        expect(rover.getLocation()).toEqual({x: 4, y: 6})
    })

    it('rover should execute instructions as expected', () => {
        const rover = new Rover(roverLocation, 'W')
        const exploreSurface = new ExploreSurface(surface, rover)
        exploreSurface.execute('LMRM')
        expect(rover.getDirection()).toEqual('W')
        expect(rover.getLocation()).toEqual({x: 4, y: 5})
    })

    describe('Validation', () => {
        const newRoverLocation = {x: 2, y: 3}
        const newSurface = {horizontalLength: 5, verticalLength: 6}
        it('Should throw error if rover crosses horizontal length of surface', () => {
            const rover = new Rover(newRoverLocation, 'E')
            const exploreSurface = new ExploreSurface(newSurface, rover)
            expect(() => exploreSurface.execute('MMMM')).toThrow('Out of Bounds')
        })

        it('Should throw error if rover crosses vertical length of surface', () => {
            const rover = new Rover(newRoverLocation, 'N')
            const exploreSurface = new ExploreSurface(newSurface, rover)
            expect(() => exploreSurface.execute('MMMM')).toThrow('Out of Bounds')
        })

        it(`Should throw error if rover's location is below 0 on y axis`, () => {
            const rover = new Rover(newRoverLocation, 'S')
            const exploreSurface = new ExploreSurface(newSurface, rover)
            expect(() => exploreSurface.execute('MMMM')).toThrow('Out of Bounds')
        })

        it(`Should throw error if rover's location is below 0 on x axis`, () => {
            const rover = new Rover(newRoverLocation, 'W')
            const exploreSurface = new ExploreSurface(newSurface, rover)
            expect(() => exploreSurface.execute('MMMM')).toThrow('Out of Bounds')
        })

        it(`Should throw error if rover's current location is not valid on instantiating exploreSurface`, () => {
            const invalidRoverLocation = {x: -1, y: 3}
            const rover = new Rover(invalidRoverLocation, 'W')
            expect(() => new ExploreSurface(newSurface, rover)).toThrow('Out of Bounds')
        })
    })
})