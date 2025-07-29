
# Database Schema for Travel Website

This document outlines the database schema required to support the backend functionality of the travel planning website.

---

## 1. User Management

### `users`

Stores information about registered users.

| Column Name       | Data Type     | Constraints              | Description                               |
| ----------------- | ------------- | ------------------------ | ----------------------------------------- |
| `id`              | `UUID`        | `PRIMARY KEY`            | Unique identifier for each user.          |
| `full_name`       | `VARCHAR(255)`| `NOT NULL`               | User's full name.                         |
| `address`         | `TEXT`        | `NOT NULL`               | User's physical address.                  |
| `phone_number`    | `VARCHAR(20)` | `NOT NULL`, `UNIQUE`     | User's full phone number (with country code). |
| `email`           | `VARCHAR(255)`| `NOT NULL`, `UNIQUE`     | User's email address for login.           |
| `password_hash`   | `VARCHAR(255)`| `NOT NULL`               | Hashed password for security.             |
| `created_at`      | `TIMESTAMP`   | `DEFAULT CURRENT_TIMESTAMP` | Timestamp of account creation.            |
| `updated_at`      | `TIMESTAMP`   | `DEFAULT CURRENT_TIMESTAMP` | Timestamp of the last profile update.     |

---

## 2. Trip Planning

This set of tables manages the core trip planning feature.

### `trip_plans`

Stores the main details for each trip created by a user.

| Column Name          | Data Type     | Constraints              | Description                               |
| -------------------- | ------------- | ------------------------ | ----------------------------------------- |
| `id`                 | `UUID`        | `PRIMARY KEY`            | Unique identifier for the trip plan.      |
| `user_id`            | `UUID`        | `NOT NULL`, `FOREIGN KEY`| Links to the `users` table (`users.id`).  |
| `from_date`          | `DATE`        | `NOT NULL`               | Start date of the trip.                   |
| `to_date`            | `DATE`        | `NOT NULL`               | End date of the trip.                     |
| `adults`             | `INTEGER`     | `NOT NULL`, `DEFAULT 1`  | Number of adults traveling.               |
| `children`           | `INTEGER`     | `DEFAULT 0`              | Number of children traveling.             |
| `infants`            | `INTEGER`     | `DEFAULT 0`              | Number of infants traveling.              |
| `accommodation_type` | `VARCHAR(50)` | -                        | e.g., 'Hotel', 'Resort', 'Camping'.       |
| `budget_range`       | `VARCHAR(50)` | -                        | The selected budget per night.            |
| `estimated_cost`     | `DECIMAL(10,2)`| -                        | System-calculated estimated trip cost.    |
| `status`             | `VARCHAR(20)` | `DEFAULT 'pending'`      | e.g., 'pending', 'confirmed', 'cancelled'.|
| `created_at`         | `TIMESTAMP`   | `DEFAULT CURRENT_TIMESTAMP` | Timestamp of plan creation.               |
| `updated_at`         | `TIMESTAMP`   | `DEFAULT CURRENT_TIMESTAMP` | Timestamp of the last plan update.        |


### `trip_destinations` (Junction Table)

Links trip plans to the destinations selected for that trip.

| Column Name       | Data Type | Constraints                         | Description                               |
| ----------------- | --------- | ----------------------------------- | ----------------------------------------- |
| `trip_id`         | `UUID`    | `PRIMARY KEY`, `FOREIGN KEY` (trip_plans.id) | Links to the trip plan.                   |
| `destination_id`  | `UUID`    | `PRIMARY KEY`, `FOREIGN KEY` (destinations.id)| Links to the destination.                 |

### `trip_activities` (Junction Table)

Links trip plans to the activities selected.

| Column Name    | Data Type     | Constraints                           | Description                               |
| -------------- | ------------- | ------------------------------------- | ----------------------------------------- |
| `trip_id`      | `UUID`        | `PRIMARY KEY`, `FOREIGN KEY` (trip_plans.id) | Links to the trip plan.                   |
| `activity_id`  | `UUID`        | `PRIMARY KEY`, `FOREIGN KEY` (activities.id) | Links to the selected activity.           |

---

## 3. Content Management

These tables store the content for destinations, activities, and the blog.

### `destinations`

Stores details for all travel destinations.

| Column Name | Data Type     | Constraints   | Description                                     |
| ----------- | ------------- | ------------- | ----------------------------------------------- |
| `id`        | `UUID`        | `PRIMARY KEY` | Unique identifier for the destination.          |
| `name`      | `VARCHAR(255)`| `NOT NULL`    | Name of the destination (e.g., 'Sigiriya').     |
| `location`  | `VARCHAR(255)`| `NOT NULL`    | Broader location (e.g., 'Matale').              |
| `image_url` | `TEXT`        | `NOT NULL`    | URL for the main destination image.             |
| `description`| `TEXT`        | -             | A short description for display cards.          |
| `details`   | `TEXT`        | -             | Full details for the destination page.          |
| `is_popular`| `BOOLEAN`     | `DEFAULT FALSE` | Flag for featured destinations on the homepage. |

### `activities`

Stores all available activities that users can add to their trips.

| Column Name  | Data Type     | Constraints   | Description                                     |
| ------------ | ------------- | ------------- | ----------------------------------------------- |
| `id`         | `UUID`        | `PRIMARY KEY` | Unique identifier for the activity.             |
| `name`       | `VARCHAR(255)`| `NOT NULL`, `UNIQUE`| Name of the activity (e.g., 'Rafting').   |
| `category`   | `VARCHAR(50)` | `NOT NULL`    | e.g., 'Adventure', 'Culture', 'Relaxation'.     |
| `location`   | `VARCHAR(255)`| -             | Specific location where the activity is offered.|
| `image_url`  | `TEXT`        | -             | URL for the activity's image.                   |


### `blog_posts`

Stores all blog articles.

| Column Name      | Data Type     | Constraints                   | Description                                  |
| ---------------- | ------------- | ----------------------------- | -------------------------------------------- |
| `id`             | `UUID`        | `PRIMARY KEY`                 | Unique identifier for the blog post.         |
| `title`          | `VARCHAR(255)`| `NOT NULL`                    | The title of the article.                    |
| `content`        | `TEXT`        | `NOT NULL`                    | The full content of the blog post (HTML/Markdown). |
| `image_url`      | `TEXT`        | -                             | URL for the post's feature image.            |
| `author_id`      | `UUID`        | `FOREIGN KEY` (`users.id`)    | The user who wrote the article.              |
| `category_id`    | `UUID`        | `FOREIGN KEY` (`blog_categories.id`) | The category of the blog post.             |
| `created_at`     | `TIMESTAMP`   | `DEFAULT CURRENT_TIMESTAMP`   | Timestamp of when the post was published.    |
| `updated_at`     | `TIMESTAMP`   | `DEFAULT CURRENT_TIMESTAMP`   | Timestamp of the last post update.           |


### `blog_categories`

Stores categories for blog posts.

| Column Name | Data Type     | Constraints   | Description                                     |
| ----------- | ------------- | ------------- | ----------------------------------------------- |
| `id`        | `UUID`        | `PRIMARY KEY` | Unique identifier for the category.             |
| `name`      | `VARCHAR(255)`| `NOT NULL`, `UNIQUE` | Name of the category (e.g., 'Wildlife'). |

This schema provides a solid foundation for your application's backend. You can use a database management tool to create these tables and relationships.
