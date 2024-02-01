export interface StyleProps {
  //font props
  fontSize?: string;
  fontWeight?: string; // TODO: this should accept only possible font-weight values. Currently, it accepts anything.
  textAlign?: string; //TODO: this should only support possible text-align values. Currently, it accepts anything.
  textColor?: string; // TODO: this should accept only possible color values. Currently, it accepts anything.

  backgroundColor?: string; // TODO: this should accept only possible color values. Currently, it accepts anything.

  //padding props
  paddingX?: string; //TODO: We should also support individual padding values, like we have done for the margins.
  paddingY?: string;

  //border props
  borderRadius?: string;
  borderColor?: string; // TODO: this should accept only possible color values. Currently, it accepts anything.

  //margin props
  marginTop?: string; //TODO: We should also support combined horizontal and vertical margins like we have done for the padding.
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
}
