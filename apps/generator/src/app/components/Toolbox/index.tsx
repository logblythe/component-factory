import { Accordion } from "../primitives";
import { ACCORDION_ITEMS } from "./accordion-items";

export function Toolbox(): React.JSX.Element {
  return <Accordion defaultValue="Tiles" items={ACCORDION_ITEMS} />;
}
