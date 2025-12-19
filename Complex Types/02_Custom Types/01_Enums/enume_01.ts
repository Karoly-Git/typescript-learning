// ==============================
// TYPESCRIPT PRACTICE — ENUMS
// ==============================
//
// TASK 1: BASIC ENUM
// ------------------
// Scenario:
// You are building an app that tracks order status.
//
// 1. Create an enum called OrderStatus
// 2. It should include:
//    - Pending
//    - Shipped
//    - Delivered
//    - Cancelled

enum OrderStatus {
    Pending = "PENDING",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED",
    Cancelled = "CANCELLED"
};

// 3. Assign one enum value to a variable called currentStatus.

let currentStatus: OrderStatus;

// TODO: assign a valid enum value

currentStatus = OrderStatus.Pending;

// TASK 2: ENUM IN A FUNCTION
// -------------------------
// Scenario:
// Display a user-friendly message based on order status.
//
// 1. Create a function called getOrderMessage
// 2. It accepts one parameter of type OrderStatus
// 3. It returns:
//    - "Your order is being prepared" for Pending
//    - "Your order is on the way" for Shipped
//    - "Your order has arrived" for Delivered
//    - "Your order was cancelled" for Cancelled

function getOrderMessage(orderStatus: OrderStatus): string {
    switch (orderStatus) {
        case OrderStatus.Pending:
            return "Your order is being prepared";
        case OrderStatus.Shipped:
            return "Your order is on the way";
        case OrderStatus.Delivered:
            return "Your order has arrived";
        case OrderStatus.Cancelled:
            return "Your order was cancelled";
        default:
            return "Unknown order status";
    }
}

// TASK 3: ENUM + CONDITIONAL LOGIC
// -------------------------------
// Scenario:
// Only certain orders can be cancelled.
//
// Rules:
// - Pending → true
// - Shipped → false
// - Delivered → false
// - Cancelled → false
//
// 1. Create a function called canCancelOrder
// 2. It accepts OrderStatus
// 3. It returns boolean

function canCancelOrder(orderStatus: OrderStatus): boolean {
    return orderStatus === OrderStatus.Pending;
}


// TASK 4: ENUM IN AN OBJECT
// ------------------------
// Scenario:
// Each order has an ID and a status.
//
// 1. Create an object called order
// 2. Properties:
//    - id: number
//    - status: OrderStatus
// 3. Assign a valid enum value to status

let order: {
    id: number,
    status: OrderStatus
}

order = {
    id: 1,
    status: OrderStatus.Pending
};



// TASK 5: SAFETY CHECK (IMPORTANT)
// --------------------------------
// Scenario:
// Someone tries to assign a string directly to the order status.
//
// Example:
// order.status = "Delivered";
//
// 1. Explain why TypeScript should reject this
// 2. Fix the assignment using the enum properly

// explanation:
/*
TypeScript should reject this because order.status is typed as OrderStatus,
not as a string. Allowing raw strings would break type safety and make it
possible to assign invalid or unsupported values. Enums restrict the value
to a fixed set of allowed options, preventing bugs at compile time.
*/

// correct assignment:
order.status = OrderStatus.Delivered;
