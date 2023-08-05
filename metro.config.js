const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  resolver: {
    useWatchman: false,
    assetExts: [...defaultConfig.resolver.assetExts, "md"],
  },
};
