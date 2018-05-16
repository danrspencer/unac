module Util.Maybe exposing (oneOf)


oneOf : List (Maybe a) -> Maybe a
oneOf maybes =
    case maybes of
        [] ->
            Nothing

        maybe :: rest ->
            case maybe of
                Nothing ->
                    oneOf rest

                Just _ ->
                    maybe
