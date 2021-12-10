import * as React from "react"
import {Svg, Path, Line} from "react-native-svg"

export default function PostSvg() {
    return (
        <Svg viewBox="0 0 40 40" fill="none" >
            <Path d="M22 25H31V25C31 28.3137 28.3137 31 25 31H22V25Z" fill="#ACACAC"/>
            <Path d="M9 25H24V31H15C11.6863 31 9 28.3137 9 25V25Z" fill="#ACACAC"/>
            <Path d="M27.069 7H13.1981C10.3318 7 8 9.33171 8 12.198V26.0691C8 28.9353 10.3318 31.267 13.1981 31.267H27.069C29.9352 31.267 32.267 28.9353 32.267 26.0691V12.198C32.267 9.33171 29.9352 7 27.069 7ZM30.5338 26.0691C30.5338 27.9795 28.9795 29.5337 27.069 29.5337H13.1981C11.2876 29.5337 9.7333 27.9795 9.7333 26.0691V12.198C9.7333 10.2875 11.2875 8.7334 13.1981 8.7334H27.069C28.9794 8.7334 30.5338 10.2875 30.5338 12.198V26.0691V26.0691Z" fill="#717171"/>
            <Line x1="31" y1="25.5" x2="9" y2="25.5" stroke="#717171"/>
            <Line x1="21.5" y1="26" x2="21.5" y2="30" stroke="#717171"/>
            <Line x1="15.5" y1="26" x2="15.5" y2="30" stroke="#717171"/>
        </Svg>
    )
}
