Use your existing photos from Documents here
============================================

1. Copy or move your "pallavi-anniversary" folder from:
   Documents → Documents - Ayush's MacBook Air → pallavi-anniversary

   So that everything INSIDE that folder (your month folders and photos)
   ends up here, inside:
   anniversary-website/public/pallavi-anniversary/

2. Suggested structure (create if you don't have it):
   pallavi-anniversary/
     month1/
       photo1.jpg, photo2.jpg, ...   (or put them in month1/photos/)
     month2/
       ...
     month3/ ... month6/

3. Then in src/data/memories.js, add each photo with url:
   /pallavi-anniversary/month1/photo1.jpg
   (or /pallavi-anniversary/month1/photos/photo1.jpg if you use a photos subfolder)

After copying, this folder will contain your real photos and the app will load them.
