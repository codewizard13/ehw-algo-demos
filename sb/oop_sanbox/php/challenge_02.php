<?php

/*
CHALLENGE 02:

- Make a class type - choose your own class
- Pick a topic that interests you
- Look for subcategories with similarities, shared attributes
- Map inheritance on paper, list properties and methods

- Define PHP classes
- Inherit, extend, and override properties and methods
- Create instances to test your understanding /hypotheses

- Sample Categories: animals, clothing, foods, furniture, musical instruments

I'll do BOOKS


2022-12-05
Eric Hepperle
#COURSEWORK #TUTWRK #LINKEDINLEARNING
*/

class Book {

  var $title;
  var $author;
  var $year;
  var $isbn;

  var $is_fiction = false;

  protected $css_styles = [
    "min-height" => "2rem",
    "padding" => "1rem",
    "border-radius" => ".3rem",
    "font-family" => "serif"
  ];

  
  public function __construct($title, $author, $year, $isbn)
  {
    $this->title = $title;
    $this->author = $author;
    $this->year = $year;
    $this->isbn = $isbn;
  }

  function style_string() {

    $out = '';

    foreach ($this->css_styles as $key => $value) {
      $out .= "$key: $value; ";
    }

    return $out;

  }

  function name() {
    return $this->title . " by: " . $this->author . " (" . $this->year . ")";
  }

}

$book1 = new Book;
$book1->title = "The Art of Shen Ku";
$book1->author = "Zeek";
$book1->year = 1998;
$book1->isbm = "1002";


echo $book1->name() . "<br>";


class NonFictionBook extends Book {



}

class FictionBook extends Book {

  var $is_fiction = true;

  var $characters = [];
  var $plot;
  var $setting;
  var $theme;
  var $formats = [];
  var $length_type = 'novel';

  public function __construct($title, $author, $year, $isbn)
  {
    // parent::style_string();
    parent::__construct( $title, $author, $year, $isbn  );
    
    $this->css_styles['font-family'] = "serif";
    
  }


}

$book2 = new FictionBook;
$book2->title = "The Divine Comedy";
$book2->author = "Dante Alighieri";
$book2->year = 1472;
$book2->isbn = "1003";

$books = [
  $book1, $book2
];

// var_dump($books);

echo "<ul>";
foreach ($books as $book) {



  echo "<li>";
  echo $book->title . "<br>";
  echo $book->style_string() . "<br>";
  echo "</li>";


}
echo "</ul>";