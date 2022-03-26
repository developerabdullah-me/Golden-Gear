import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className="container">
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      how react works?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>আমরা সবাই জানি যে আমরা JSX ব্যবহার করে একটি প্রতিক্রিয়া উপাদান তৈরি করতে পারি, এবং  React DOM ব্যবহার করেও ওয়েব রেন্ডার তৈরি করতে পারি। আমাদের কাছে স্টেট বা উপাদান  মতো অবিশ্বাস্য বৈশিষ্ট্য বিষয়দি গুলিতেও অ্যাক্সেস রয়েছে, তবে পর্দার পিছনে আসলে কী ঘটছে? একটি প্রতিক্রিয়া উপাদান যা JSX, JavaScript XML ব্যবহার করে প্রতিক্রিয়া উপাদান প্রদান করে। প্রতিক্রিয়ার জন্য, রিটার্ন মান একটি অবজেক্ট। যখন আমরা কম্পোনেন্টকে কল করি, তখন আমরা আসল রিটার্ন ভ্যালু পাই। যখন আমরা একটি উপাদান লিখি তা একটি খাঁটি জাভাস্ক্রিপ্ট কোড। আমাদের এই জাভাস্ক্রিপ্ট কোডটিকে HTML-এ রূপান্তর করতে হবে, কারণ আমরা ব্রাউজারে যা দেখছি, সবকিছুই HTML কোড। এই রূপান্তর প্রক্রিয়ার জন্য, আমরা যে প্রতিক্রিয়াটা ব্যবহার  করি তাকে একটি প্রতিক্রিয়া ডম এ  রূপান্তর করা হয়। প্রতিক্রিয়া JS কোড  DOM HTML ফাইলে তৈরি করতে সাহায্য করে এবং এই প্রক্রিয়াটি ব্রাউজারে  রিলোড না করেই ঘটে।
            আর এভাবেই রিয়েয়াক্ট কাজ করে থাকে।
            </strong> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>স্টেট এবং প্রপস এইটা রিঅ্যাক্ট একটি উপাদানে ডেটা নিয়ন্ত্রণ করতে ব্যবহৃত হয়ে থাকে। স্টেট পরিবর্তনশীল। পরিবর্তন করা হবে যে ডেটার জন্য, আমরা যে ডেটা এর জন্য স্টেট ব্যবহার করি। স্টেট হল মূল ধারণা যা আপনাকে প্রতিক্রিয়া উপাদান তৈরি করতে দেয় যা ডেটা সঞ্চয় করতে পারে এবং ডেটা পরিবর্তনের উপর ভিত্তি করে স্বয়ংক্রিয়ভাবে ভিউ বাড়াতে পারে। প্রপস অপরিবর্তনীয়। সাধারণত, প্রপগুলি প্যরেন্ড এবং চাইল্ড  দ্বারা সেট করা হয় এবং চাইল্ডে উপাদানগুলিকে প্রেরণ করা হয় । আপনি উপাদান নিজেই স্টেট সংজ্ঞায়িত করতে পারেন, প্রপস জন্য আপনি মূল উপাদান থেকে বৈশিষ্ট্য পাস করতে পারেন. অবজেক্ট দ্বারা স্টেট সেট এবং আপডেট করা হয়, প্রপস ভিউ নির্ধারণ করে এবং তারপরে তারা স্থির থাকে। স্টেট একটি উপাদান সম্পত্তি নয় এটি একটি উপাদানের একটি বৈশিষ্ট্য। স্টেটস এবং প্রপস এর সাথে কাজ করার জন্য, আপনি নাম দ্বারা তাদের অ্যাক্সেস করতে পারেন, এই নামটি বস্তুর একটি বৈশিষ্ট্য।</strong> 
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Question;