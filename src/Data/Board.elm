module Data.Board exposing (..)

import Util.Maybe


type Player
    = Player1
    | Player2


type alias Winner =
    Maybe Player


type alias Board =
    ( Winner, Grid )


type alias BaseBoard =
    ( Winner, BaseGrid )


type Square
    = Winner Winner
    | Board Board



-- Refactor out "grid stuff" so grid of a


type alias Grid a =
    ( ( a, a, a ), ( a, a, a ), ( a, a, a ) )


type alias BaseGrid =
    ( ( Winner, Winner, Winner ), ( Winner, Winner, Winner ), ( Winner, Winner, Winner ) )


type alias MetaGrid =
    ( ( Board, Board, Board ), ( Board, Board, Board ), ( Board, Board, Board ) )


winner : ( Winner, Grid ) -> Winner
winner ( winner, _ ) =
    winner


grid : ( Winner, Grid ) -> Grid
grid ( _, grid ) =
    grid


initialBoard : Int -> Board
initialBoard depth =
    ( Nothing
    , BaseGrid ( ( Nothing, Nothing, Nothing ), ( Nothing, Nothing, Nothing ), ( Nothing, Nothing, Nothing ) )
    )


findWinner : Grid -> Winner
findWinner grid =
    case grid of
        BaseGrid grid ->
            lines grid |> List.map lineWinner |> Util.Maybe.oneOf

        MetaGrid grid ->
            Nothing



-- MaybeExtra or


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


lineWinner : ( Winner, Winner, Winner ) -> Winner
lineWinner ( a, b, c ) =
    if (a == b && b == c) then
        a
    else
        Nothing


takeMove : BaseBoard -> Int -> Player -> Board
takeMove board pos player =
    ( Nothing, updateGrid (grid board) pos player )


updateGrid : BaseGrid -> Int -> Player -> BaseGrid
updateGrid ( ( a1, b1, c1 ), ( a2, b2, c2 ), ( a3, b3, c3 ) ) pos player =
    ( ( updateCell 0 a1 pos player
      , updateCell 1 b1 pos player
      , updateCell 2 c1 pos player
      )
    , ( updateCell 3 a2 pos player
      , updateCell 4 b2 pos player
      , updateCell 5 c2 pos player
      )
    , ( updateCell 6 a3 pos player
      , updateCell 7 b3 pos player
      , updateCell 8 c3 pos player
      )
    )


updateCell : Int -> Winner -> Int -> Player -> Winner
updateCell cellPos winner updatePos player =
    if (cellPos == updatePos) then
        Maybe.Just player
    else
        winner
