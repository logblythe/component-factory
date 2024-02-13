type FontProps = "fontSize" | "fontWeight" | "lineHeight" | "textColor";

type BorderProps = "borderRadius" | "borderColor";

type SpacingProps = "margin" | "padding";

type AlignmentProps = "flexDirection" | "alignItems" | "justifyContent";

export type SettingType =
  | FontProps
  | BorderProps
  | SpacingProps
  | AlignmentProps
  | "backgroundColor";

export type InputType =
  | "color"
  | "numbers"
  | "radio"
  | "select"
  | "slider"
  | "text"
  | "number";
