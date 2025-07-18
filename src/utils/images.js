const imageModules = import.meta.glob('../assets/images/*.png', { eager: true });

const images = {};
for (const path in imageModules) {
  const fileName = path.split('/').pop();
  images[fileName] = imageModules[path].default;
}

export default images;