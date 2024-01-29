import { swatch, fileIcon, ai, logoShirt, stylishShirt, } from "@/assets/index";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
    width: 30,
    height: 30,
  },
  {
    name: "filepicker",
    icon: fileIcon,
    width: 30,
    height: 30,
  },
  {
    name: "aipicker",
    icon: ai,
    width: 30,
    height: 30,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
    width: 30,
    height: 30,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
    width: 30,
    height: 30,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
