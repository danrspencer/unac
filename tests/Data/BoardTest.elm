module Data.BoardTest exposing (..)

import Test exposing (..)
import Fuzz exposing (Fuzzer)
import Expect
import Maybe
import Data.Board exposing (..)


x : Winner
x =
    Maybe.Just Player1


o : Winner
o =
    Maybe.Just Player2


n : Winner
n =
    Nothing


eb : Board
eb =
    ( Nothing
    , BaseGrid ( ( n, n, n ), ( n, n, n ), ( n, n, n ) )
    )


boardTest : Test
boardTest =
    describe "Data.Board"
        [ describe "findWinner - base grid"
            [ test "empty grid" <|
                \_ ->
                    let
                        emptyGrid =
                            BaseGrid ( ( n, n, n ), ( n, n, n ), ( n, n, n ) )
                    in
                        findWinner emptyGrid |> Expect.equal Nothing
            , test "diagonal winner" <|
                \_ ->
                    let
                        diagonalWinner =
                            BaseGrid ( ( x, n, n ), ( n, x, n ), ( n, n, x ) )
                    in
                        findWinner diagonalWinner |> Expect.equal x
            , test "mixed board winner" <|
                \_ ->
                    let
                        verticalWinner =
                            BaseGrid ( ( o, x, x ), ( o, x, x ), ( o, n, x ) )
                    in
                        findWinner verticalWinner |> Expect.equal o
            ]
        , describe "findWinner - grid depth 1"
            [ test "empty grid" <|
                \_ ->
                    let
                        emptyGrid =
                            MetaGrid ( ( eb, eb, eb ), ( eb, eb, eb ), ( eb, eb, eb ) )
                    in
                        findWinner emptyGrid |> Expect.equal Nothing

            --     , test "p1 meta grid winner" <|
            -- \_ ->
            --     let
            --         horizontalWinner =
            ]
        , describe "takeMove"
            [ describe "base grid"
                [ test "p1 move on empty grid" <|
                    \_ ->
                        grid (takeMove eb 0 Player1) |> Expect.equal (BaseGrid ( ( x, n, n ), ( n, n, n ), ( n, n, n ) ))
                ]
            ]
        ]


randomGrid : Fuzzer BaseGrid
randomGrid =
    Fuzz.map3 (,,) randomLine randomLine randomLine


randomLine : Fuzzer BaseLine
randomLine =
    Fuzz.map3 (,,) randomWinner randomWinner randomWinner


randomWinner : Fuzzer Winner
randomWinner =
    Fuzz.oneOf
        [ Fuzz.constant <| Nothing
        , Fuzz.constant <| Maybe.Just Player1
        , Fuzz.constant <| Maybe.Just Player2
        ]
