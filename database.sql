
CREATE DATABASE IF NOT EXISTS api_dados CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE api_dados;


DROP TABLE IF EXISTS venda;
CREATE TABLE venda (
  id INT AUTO_INCREMENT PRIMARY KEY,
  produto VARCHAR(100) NOT NULL,
  categoria VARCHAR(100) NOT NULL,
  valor DECIMAL(10,2) NOT NULL,
  data DATE NOT NULL
);


INSERT INTO venda (produto, categoria, valor, data) VALUES
('Teclado Gamer', 'Periférico', 249.90, '2024-01-05'),
('Mouse Óptico', 'Periférico', 89.90, '2024-01-15'),
('Monitor 24"', 'Hardware', 999.00, '2024-02-10'),
('Notebook Lenovo', 'Hardware', 4250.00, '2024-02-22'),
('Cadeira Gamer', 'Mobiliário', 1150.00, '2024-03-10'),
('Headset RGB', 'Periférico', 199.90, '2024-03-15'),
('SSD 1TB', 'Hardware', 450.00, '2024-04-02'),
('Mesa Escritório', 'Mobiliário', 650.00, '2024-04-18'),
('Mousepad XXL', 'Periférico', 59.90, '2024-05-10'),
('Gabinete RGB', 'Hardware', 820.00, '2024-05-20'),
('Teclado Mecânico', 'Periférico', 350.00, '2024-06-05'),
('Monitor 27"', 'Hardware', 1450.00, '2024-06-22'),
('Cadeira Ergonômica', 'Mobiliário', 980.00, '2024-07-02'),
('HD Externo 2TB', 'Hardware', 399.00, '2024-07-15'),
('Caixa de Som Bluetooth', 'Periférico', 220.00, '2024-08-03'),
('Notebook Dell', 'Hardware', 5150.00, '2024-08-20'),
('Mouse Vertical', 'Periférico', 170.00, '2024-09-10'),
('Mesa Gamer', 'Mobiliário', 1250.00, '2024-09-25'),
('Placa de Vídeo RTX 4060', 'Hardware', 2999.00, '2024-10-05'),
('Fonte 750W', 'Hardware', 580.00, '2024-10-25'),
('Cadeira Escritório', 'Mobiliário', 750.00, '2024-11-12'),
('Headset Sem Fio', 'Periférico', 320.00, '2024-11-20'),
('Teclado ABNT2', 'Periférico', 180.00, '2024-12-02'),
('Monitor Ultrawide', 'Hardware', 2100.00, '2024-12-15');
