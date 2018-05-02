module Data.Grid exposing (..)


type Player
    = Player1
    | Player2


type alias Winner =
    Maybe Player


type Lines
    = Row1
    | Row2
    | Row3
    | Column1
    | Column2
    | Column3
    | TopLeftBottomRight
    | BottomLeftTopRight


type alias Line =
    ( Square, Square, Square )


type alias Grid =
    ( Line, Line, Line )


type alias Board =
    { winner : Winner
    , grid : Grid
    }


type Square
    = Winner
    | Board


lines : Grid -> List Line
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


winner : Grid -> Winner
winner =
    lines >> foldr (Maybe.map3 (\a b c -> a == b && b == c))
