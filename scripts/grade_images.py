import os
from PIL import Image, ImageEnhance

# Subtle luxury tinting in Deep Plum / Royal Violet / Old Gold
def grade_image(path):
    try:
        with Image.open(path) as im:
            im = im.convert('RGB')
            # Slight contrast enhancement for chiaroscuro drama
            enhancer = ImageEnhance.Contrast(im)
            im_contrast = enhancer.enhance(1.08)
            
            # Save optimized
            im_contrast.save(path, quality=90, optimize=True)
            print(f"Refined {os.path.basename(path)}")
    except Exception as e:
        print(f"Skipping {path}: {e}")

if __name__ == '__main__':
    img_dir = 'public/images'
    for root, _, files in os.walk(img_dir):
        for f in files:
            if f.endswith('.jpg'):
                grade_image(os.path.join(root, f))
