module Data.BoardTest exposing (..)

import Test exposing (..)
import Expect
import Maybe
import Data.Board exposing (..)


gridOf : Winner -> Grid
gridOf a =
    ( ( a, a, a ), ( a, a, a ), ( a, a, a ) )


createBoard : Grid -> Board
createBoard grid =
    Board { winner = Nothing, grid = grid }


x : Winner
x =
    Maybe.Just Player1


o : Winner
o =
    Maybe.Just Player2


n : Winner
n =
    Nothing


nn : Board
nn =
    Board { winner = n, grid = gridOf n }


xx : Board
xx =
    Board { winner = x, grid = gridOf x }


oo : Board
oo =
    Board { winner = o, grid = gridOf o }


boardTest : Test
boardTest =
    describe "Data.Board"
        [ describe "gridWinner - base grid"
            [ test "empty grid" <|
                \_ ->
                    gridWinner n (gridOf n) |> Expect.equal Nothing
            , test "diagonal winner" <|
                \_ ->
                    let
                        diagonalWinner =
                            ( ( x, n, n ), ( n, x, n ), ( n, n, x ) )
                    in
                        gridWinner n diagonalWinner |> Expect.equal x
            , test "mixed board winner" <|
                \_ ->
                    let
                        verticalWinner =
                            ( ( o, x, x ), ( o, x, x ), ( o, n, x ) )
                    in
                        gridWinner n verticalWinner |> Expect.equal o
            ]

        -- , describe "boardWinner - grid depth 1"
        --     [ test "empty grid" <|
        --         \_ ->
        --             let
        --                 emptyGrid =
        --                     ( ( nn, nn, nn ), ( nn, nn, nn ), ( nn, nn, nn ) )
        --             in
        --                 boardWinner nn |> Expect.equal Nothing
        --     , test "horizontal winner" <|
        --         \_ ->
        --             let
        --                 horWinner =
        --                     createBoard ( ( xx, xx, xx ), ( nn, oo, oo ), ( nn, oo, oo ) )
        --             in
        --                 boardWinner horWinner |> Expect.equal x
        --     , test "p1 meta grid winner" <|
        -- \_ ->
        --     let
        --         horizontalWinner =
        -- ]
        , describe "takeMove"
            [ describe "base grid"
                [ test "p1 move on empty grid" <|
                    \_ ->
                        let
                            theGrid =
                                ( ( x, x, x ), ( n, n, n ), ( n, n, n ) )

                            updateGrid grid =
                                theGrid

                            takeMoveForSquare =
                                takeMove updateGrid
                        in
                            takeMoveForSquare initialBoard |> Expect.equal (Board { grid = theGrid, winner = x })
                ]
            ]
        ]



-- randomGrid : Fuzzer BaseGrid
-- randomGrid =
--     Fuzz.map3 (,,) randomLine randomLine randomLine
-- randomLine : Fuzzer BaseLine
-- randomLine =
--     Fuzz.map3 (,,) randomWinner randomWinner randomWinner
-- randomWinner : Fuzzer Winner
-- randomWinner =
--     Fuzz.oneOf
--         [ Fuzz.constant <| Nothing
--         , Fuzz.constant <| Maybe.Just Player1
--         , Fuzz.constant <| Maybe.Just Player2
--         ]
