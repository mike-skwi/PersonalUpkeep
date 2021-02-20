import React from "react";
import { Text as RNText, TextProps } from "react-native";

export const Text: React.FC<TextProps> = (props) => {
  const { children, style, ...rest } = props;
  return (
    <RNText
      maxFontSizeMultiplier={2}
      style={[
        {
          fontFamily: "columbia",
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
};
