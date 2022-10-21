namespace SpriteKind {
    export const peanut = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    game.over(true)
})
scene.setBackgroundColor(0)
tiles.setCurrentTilemap(tilemap`level2`)
let Anya = sprites.create(assets.image`Anya`, SpriteKind.Player)
controller.moveSprite(Anya)
tiles.placeOnRandomTile(Anya, assets.tile`myTile7`)
scene.cameraFollowSprite(Anya)
