<?php
$name = "World";
$greeting = "Hello, " . $name . "!";

echo $greeting;
echo "\n";

$fruits = ["Apple", "Banana", "Orange"];
foreach ($fruits as $fruit) {
    echo "- " . $fruit . "\n";
}

function add($a, $b) {
    return $a + $b;
}

$result = add(5, 3);
echo "5 + 3 = " . $result;
?>