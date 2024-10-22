-- CreateEnum
CREATE TYPE "CategoryType" AS ENUM ('MEAT', 'FISH', 'SEMI_FINISHED_PRODUCTS', 'DAIRY', 'VEGETABLES_AND_FRUITS', 'BAKERY_AND_CONFECTIONERY', 'DRINKS', 'ALCOHOL', 'CONSERVATION', 'SAUCES_AND_OIL', 'HOUSEHOLD_CHEMICALS');

-- CreateEnum
CREATE TYPE "DeliveryMethod" AS ENUM ('HOME_DELIVERY', 'DELIVERY_POINT', 'STORE');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('UPON_RECEIPT', 'NOW');

-- CreateEnum
CREATE TYPE "ShopType" AS ENUM ('WAREHOUSE', 'FOODSTORE', 'SUPERMARKET', 'PICKUP');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'MODERATOR');

-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userName" TEXT,
    "userPassword" TEXT NOT NULL,
    "userPhoneNumber" TEXT,
    "userBonusAccount" TEXT,
    "userInterfaceLanguage" BOOLEAN NOT NULL DEFAULT false,
    "userNotification" BOOLEAN NOT NULL DEFAULT false,
    "userRole" "Role" NOT NULL DEFAULT 'USER',
    "userPhoto" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Order" (
    "orderId" TEXT NOT NULL,
    "userOrderId" TEXT NOT NULL,
    "orderDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "receiver" TEXT NOT NULL,
    "receiverPhone" TEXT NOT NULL,
    "paymentMethod" "PaymentMethod" NOT NULL DEFAULT 'UPON_RECEIPT',

    CONSTRAINT "Order_pkey" PRIMARY KEY ("orderId")
);

-- CreateTable
CREATE TABLE "OrderProductQuantity" (
    "orderProductQuantityId" TEXT NOT NULL,
    "orderProductId" TEXT NOT NULL,
    "orderProductQuantityProductId" TEXT NOT NULL,
    "productQuantity" INTEGER NOT NULL,

    CONSTRAINT "OrderProductQuantity_pkey" PRIMARY KEY ("orderProductQuantityId")
);

-- CreateTable
CREATE TABLE "Delivery" (
    "deliveryId" TEXT NOT NULL,
    "deliveryMethod" "DeliveryMethod" NOT NULL DEFAULT 'STORE',
    "deliveryAddress" TEXT,
    "deliveryPrice" TEXT NOT NULL,
    "deliveryOrderId" TEXT NOT NULL,

    CONSTRAINT "Delivery_pkey" PRIMARY KEY ("deliveryId")
);

-- CreateTable
CREATE TABLE "UsersProductQuantity" (
    "usersProductQuantityId" TEXT NOT NULL,
    "productQuantity" INTEGER NOT NULL,
    "productId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UsersProductQuantity_pkey" PRIMARY KEY ("usersProductQuantityId")
);

-- CreateTable
CREATE TABLE "Product" (
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productDescription" TEXT,
    "productBrand" TEXT NOT NULL,
    "subcategoryId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "ProductShop" (
    "productShopId" TEXT NOT NULL,
    "shopID" TEXT NOT NULL,
    "productID" TEXT NOT NULL,
    "productQuantity" INTEGER NOT NULL,

    CONSTRAINT "ProductShop_pkey" PRIMARY KEY ("productShopId")
);

-- CreateTable
CREATE TABLE "Shop" (
    "shopId" TEXT NOT NULL,
    "shopAdress" TEXT NOT NULL,
    "shopOpen" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shopClose" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shopType" "ShopType" NOT NULL DEFAULT 'SUPERMARKET',

    CONSTRAINT "Shop_pkey" PRIMARY KEY ("shopId")
);

-- CreateTable
CREATE TABLE "Category" (
    "categoryId" TEXT NOT NULL,
    "category" "CategoryType" NOT NULL DEFAULT 'MEAT',

    CONSTRAINT "Category_pkey" PRIMARY KEY ("categoryId")
);

-- CreateTable
CREATE TABLE "Subcategory" (
    "subcategoryId" TEXT NOT NULL,
    "subcategoryName" TEXT NOT NULL,
    "categorySubcategoryId" TEXT NOT NULL,

    CONSTRAINT "Subcategory_pkey" PRIMARY KEY ("subcategoryId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userEmail_key" ON "User"("userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "OrderProductQuantity_orderProductId_key" ON "OrderProductQuantity"("orderProductId");

-- CreateIndex
CREATE UNIQUE INDEX "OrderProductQuantity_orderProductQuantityProductId_key" ON "OrderProductQuantity"("orderProductQuantityProductId");

-- CreateIndex
CREATE UNIQUE INDEX "Delivery_deliveryOrderId_key" ON "Delivery"("deliveryOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_category_key" ON "Category"("category");

-- CreateIndex
CREATE UNIQUE INDEX "Subcategory_subcategoryName_key" ON "Subcategory"("subcategoryName");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userOrderId_fkey" FOREIGN KEY ("userOrderId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProductQuantity" ADD CONSTRAINT "OrderProductQuantity_orderProductId_fkey" FOREIGN KEY ("orderProductId") REFERENCES "Order"("orderId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProductQuantity" ADD CONSTRAINT "OrderProductQuantity_orderProductQuantityProductId_fkey" FOREIGN KEY ("orderProductQuantityProductId") REFERENCES "Product"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_deliveryOrderId_fkey" FOREIGN KEY ("deliveryOrderId") REFERENCES "Order"("orderId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersProductQuantity" ADD CONSTRAINT "UsersProductQuantity_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersProductQuantity" ADD CONSTRAINT "UsersProductQuantity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_subcategoryId_fkey" FOREIGN KEY ("subcategoryId") REFERENCES "Subcategory"("subcategoryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductShop" ADD CONSTRAINT "ProductShop_shopID_fkey" FOREIGN KEY ("shopID") REFERENCES "Shop"("shopId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductShop" ADD CONSTRAINT "ProductShop_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Product"("productId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subcategory" ADD CONSTRAINT "Subcategory_categorySubcategoryId_fkey" FOREIGN KEY ("categorySubcategoryId") REFERENCES "Category"("categoryId") ON DELETE CASCADE ON UPDATE CASCADE;
