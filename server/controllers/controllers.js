import { UserController } from "./UserController.js";
import { AddressController } from "./AddressController.js";
import { ProductController } from "./ProductController.js";
import { CategoryController } from "./CategoryController.js";
import { OrderController } from "./OrderController.js";
import { OrderItemsController } from "./OrderItemsController.js";
import { PaymentsController } from "./PaymentsController.js";
import { ReviewController } from "./ReviewsController.js";

const userController = new UserController();
const addressController = new AddressController();
const productController = new ProductController();
const categoryController = new CategoryController();
const orderController = new OrderController();
const orderItemsController = new OrderItemsController();
const paymentsController = new PaymentsController();
const reviewController = new ReviewController();

export { 
    userController,
    addressController,
    productController,
    categoryController,
    orderController,
    orderItemsController,
    paymentsController,
    reviewController
}


