module Tests exposing (..)

import Test exposing (..)
import Data.BoardTest


-- Check out http://package.elm-lang.org/packages/elm-community/elm-test/latest to learn more about testing in Elm!


all : Test
all =
    describe "UNAC"
        [ Data.BoardTest.boardTest
        ]
