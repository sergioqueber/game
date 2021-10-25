// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0800080002010101010101040101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010103`, img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath9,sprites.builtin.forestTiles0], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`24002400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000100000000000000000000000000010000000000000000000000000000000000000000000100000000000000000000000000010000000000000000000000000000000000000000000100000000000000000000000000010000000000000000000000000000000000000000000100000000000000000000000000010000000000000000000000000000000000000000000100000000000000000000000000010000000000000000000000000000000000000000000100000000000000000000000000010000000000000000000000000000000000000000000100000000000000000000000000010000000000000000000100000000000000000000000100000000000000000000000000010000000000000000000000000000000000000000000100000000000000000000000000010000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
....................................
`, [myTiles.transparency16,sprites.dungeon.floorDark0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.