<!DOCTYPE html>
<link rel="stylesheet" type="text/css" href="style.css">
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emma's Small Engines</title>
</head>
<body>
    <header>
        <h1>Emma's Small Engines</h1>
        <nav>
            <ul>
                <li><a href="main.html">Home</a></li>               
                <li><a href="inventory.html">Inventory</a></li>
                <li><a href="customer.html">Customer</a></li>
            </ul>
        </nav>
    </header>
    <div class="centered-title">
        <<!-- Your page content goes here -->>
    </div>

    <script>
        window.addEventListener("scroll", function() {
            const title = document.querySelector(".centered-title");
            if (title) {
                title.style.display = window.scrollY > 0 ? "block" : "none";
            }
        });
    </script>
</body>
</html>
