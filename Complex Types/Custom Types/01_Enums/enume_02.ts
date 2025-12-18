// ==============================
// TYPESCRIPT PRACTICE — ENUMS (TASK 2)
// ==============================
//
// SCENARIO:
// You are building a user authentication system.
// Each user has a role that determines what they can do in the app.
//
// TASK 1: CREATE USER ROLE ENUM
// -----------------------------
// 1. Create an enum called UserRole
// 2. It should include the following roles:
//    - Admin
//    - Editor
//    - Viewer
// 3. Use string values for the enum members



// TASK 2: ASSIGN ENUM TO A VARIABLE
// --------------------------------
// 1. Create a variable called currentUserRole
// 2. Its type should be UserRole
// 3. Assign one valid enum value



// TASK 3: ENUM IN A FUNCTION
// --------------------------
// Scenario:
// Show a message based on the user's role.
//
// 1. Create a function called getRoleMessage
// 2. It accepts one parameter of type UserRole
// 3. It returns:
//    - "Full access granted" for Admin
//    - "Content editing access granted" for Editor
//    - "Read-only access granted" for Viewer



// TASK 4: ROLE PERMISSIONS LOGIC
// ------------------------------
// Scenario:
// Only Admin and Editor can modify content.
//
// 1. Create a function called canEditContent
// 2. It accepts UserRole
// 3. It returns boolean
// 4. Rules:
//    - Admin → true
//    - Editor → true
//    - Viewer → false



// TASK 5: ENUM IN AN OBJECT
// ------------------------
// Scenario:
// Each user has an ID and a role.
//
// 1. Create an object called user
// 2. Properties:
//    - id: number
//    - role: UserRole
// 3. Assign a valid enum value to role



// TASK 6: SAFETY CHECK
// -------------------
// Scenario:
// Someone tries to assign a raw string to the user role.
//
// Example:
// user.role = "Admin";
//
// 1. Explain (in a comment) why TypeScript should reject this
// 2. Fix the assignment using the enum properly
