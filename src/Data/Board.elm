module Data.Board exposing (..)

import Util.Maybe exposing (oneOf)


type Player
    = Player1
    | Player2


type alias Winner =
    Maybe Player


type alias Grid =
    ( ( Winner, Winner, Winner ), ( Winner, Winner, Winner ), ( Winner, Winner, Winner ) )


type alias Line =
    ( Winner, Winner, Winner )


type Board
    = Board
        { winner : Winner
        , grid : Grid
        }



-- Could init each base grid with 2 winners


initialBoard : Board
initialBoard =
    Board
        { winner = Nothing
        , grid = ( ( Nothing, Nothing, Nothing ), ( Nothing, Nothing, Nothing ), ( Nothing, Nothing, Nothing ) )
        }


takeMove : (Grid -> Grid) -> Board -> Board
takeMove gridUpdater (Board { winner, grid }) =
    gridUpdater grid |> nextBoard winner


nextBoard : Winner -> Grid -> Board
nextBoard winner grid =
    Board { grid = grid, winner = gridWinner winner grid }


gridWinner : Winner -> Grid -> Winner
gridWinner currentWinner grid =
    case currentWinner of
        Just winner ->
            Just winner

        Nothing ->
            lines grid |> List.map lineWinner |> oneOf


lines : ( ( a, a, a ), ( a, a, a ), ( a, a, a ) ) -> List ( a, a, a )
lines ( ( a1, b1, c1 ), ( a2, b2, c2 ), ( a3, b3, c3 ) ) =
    [ ( a1, b1, c1 )
    , ( a2, b2, c2 )
    , ( a3, b3, c3 )
    , ( a1, a2, a3 )
    , ( b1, b2, b3 )
    , ( c1, c2, c3 )
    , ( a1, b2, c3 )
    , ( a3, b2, c1 )
    ]


lineWinner : ( Maybe a, Maybe a, Maybe a ) -> Maybe a
lineWinner ( a, b, c ) =
    if (a == b && b == c) then
        a
    else
        Nothing



-- updateGrid : Grid -> Int -> Player -> Grid
-- updateGrid ( ( a1, b1, c1 ), ( a2, b2, c2 ), ( a3, b3, c3 ) ) pos player =
--     ( ( updateCell 0 a1 pos player
--       , updateCell 1 b1 pos player
--       , updateCell 2 c1 pos player
--       )
--     , ( updateCell 3 a2 pos player
--       , updateCell 4 b2 pos player
--       , updateCell 5 c2 pos player
--       )
--     , ( updateCell 6 a3 pos player
--       , updateCell 7 b3 pos player
--       , updateCell 8 c3 pos player
--       )
--     )
-- updateCell : Int -> Winner -> Int -> Player -> Winner
-- updateCell cellPos winner updatePos player =
--     if (cellPos == updatePos) then
--         Maybe.Just player
--     else
--         winner
