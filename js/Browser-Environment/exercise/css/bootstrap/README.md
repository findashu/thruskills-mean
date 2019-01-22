## Bootstrap BreakPoints, based on screen width

* (xs) — screen width < **576**px (This is the “default” tier)
* sm — screen width ≥ **576**px
* md — screen width ≥ **768**px
* lg — screen width ≥ **992**px
* xl — screen width ≥ **1200**px

```
<div class="container"> 
   <div class="row"> 
      <div class="col-sm-6">Column 1</div>
      <div class="col-sm-6">Column 2</div> 
   </div> 
</div>
```
The col-sm-6 means use 6 of 12 columns wide (50%), on a typical **small** device width (**greater than or equal** to 768 px)


## Larger breakpoints, override Smaller breakpoints.

* xs(default) > 
* overridden by sm > 
* overridden by md > 
* overridden by lg > 
* overridden by xl

**Or**, in reverse

xl > overrides lg > overrides md > overrides sm > overrides (xs)