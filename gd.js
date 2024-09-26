<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tính Tổng Hai Số</title>
</head>
<body>
    <h2>Tính tổng hai số</h2>
    <label for="num1">Số thứ nhất: </label>
    <input type="number" id="num1" />
    <br><br>
    <label for="num2">Số thứ hai: </label>
    <input type="number" id="num2" />
    <br><br>
    <button onclick="calculateSum()">Tính Tổng</button>
    <h3>Kết quả: <span id="result"></span></h3>

    <script>
        function calculateSum() {
            // Lấy giá trị từ các input
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);

            // Tính tổng
            const sum = num1 + num2;

            // Hiển thị kết quả
            document.getElementById('result').innerText = sum;
        }
    </script>
</body>
</html>
