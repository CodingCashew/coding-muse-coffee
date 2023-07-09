

Create TABLE orders (
  order_id serial,
  email varchar(255) NOT NULL,
  phone_number varchar(255),
  username varchar(255),
  first_name varchar(255),
  last_name varchar(255),
  product_id_1 int,
  product_name_1 varchar(255),
  product_price_1 varchar(255),
  product_id_2 int,
  product_name_2 varchar(255),
  product_price_2 varchar(255),
  product_id_3 int,
  product_name_3 varchar(255),
  product_price_3 varchar(255),
  product_id_4 int,
  product_name_4 varchar(255),
  product_price_4 varchar(255),
  total varchar(255),
  discount_id varchar(255),
  created_at timestamp,
  modified_at timestamp,
  deleted_at timestamp,
  PRIMARY KEY (ORDER_ID)
);

INSERT INTO orders (email, phone_number, username, first_name, last_name, product_id_1, product_name_1, product_price_1, total, created_at) VALUES ('coffeeQueen@test.io', '4055555555', 'coffeeQueen', 'Bess', 'Fawkes', 2, 'Standup Vocabulary', 37, 40.09, NOW());


-- CREATE TABLE Course (
--     id int,
--     name varchar(255),
--     description varchar(255),
--     price int,
--     length varchar(255),
--     imagePath varchar(255),
--     created_at timestamp,
--     modified_at timestamp,
--     deleted_at timestamp,
--     PRIMARY KEY (id)
-- );

-- INSERT INTO Course (id, name, description, price, length, imagePath) VALUES (1, 'Interview Vocabulary', 'Confidently express your abilities during a technical interview', 27, '3:27:10', '/courses/linkedin-sales-solutions-Be5aVKFv9ho-unsplash.webp');
-- INSERT INTO Course (id, name, description, price, length, imagePath) VALUES (2, 'Standup Vocabulary', 'Confidently express yourself during standup', 37, '4:17:44', '/courses/dylan-gillis-KdeqA3aTnBY-unsplash.webp');
-- INSERT INTO Course (id, name, description, price, length, imagePath) VALUES (3, 'Pair Programming', 'Be able to smoothly communicate your ideas and get along well with your partner', 29, '3:39:38', '/courses/alvaro-reyes-fSWOVc3e06w-unsplash.webp');
-- INSERT INTO Course (id, name, description, price, length, imagePath) VALUES (4, 'General Tech Conversation', 'Be able to keep up with the latest tech news and share ideas', 34, '4:13:25', '/courses/sigmund-AQTA5E6mCNU-unsplash.webp');