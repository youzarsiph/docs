import { Format, Padding, Size } from "@/app/types";

type Settings = {
  size: Size;
  format: Format;
  theme: boolean;
  padding: Padding;
  orientation: boolean;
};

export default Settings;
