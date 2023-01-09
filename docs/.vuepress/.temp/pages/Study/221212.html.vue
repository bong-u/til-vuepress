<template><div><h1 id="algorithm" tabindex="-1"><a class="header-anchor" href="#algorithm" aria-hidden="true">#</a> Algorithm</h1>
<h3 id="bellman-ford" tabindex="-1"><a class="header-anchor" href="#bellman-ford" aria-hidden="true">#</a> Bellman_ford</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>dp<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>V<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>E<span class="token punctuation">)</span><span class="token punctuation">:</span>
    a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> G<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
    <span class="token keyword">if</span> dp<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">!=</span> INF <span class="token keyword">and</span> dp<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">></span> dp<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">+</span>c<span class="token punctuation">:</span>
      dp<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">+</span>c
      <span class="token keyword">if</span> i <span class="token operator">==</span> V<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
<span class="token keyword">return</span> <span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="floyd-warshall" tabindex="-1"><a class="header-anchor" href="#floyd-warshall" aria-hidden="true">#</a> Floyd_Warshall</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">for</span> k <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">:</span>
  G<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">:</span>
      G<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">min</span><span class="token punctuation">(</span>G<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> G<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">+</span>G<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kruskal" tabindex="-1"><a class="header-anchor" href="#kruskal" aria-hidden="true">#</a> Kruskal</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>P <span class="token operator">=</span> <span class="token punctuation">[</span>i <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>V<span class="token punctuation">)</span><span class="token punctuation">]</span>

<span class="token keyword">def</span> <span class="token function">find</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> x <span class="token operator">!=</span> P<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">:</span>
    P<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> find<span class="token punctuation">(</span>P<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> P<span class="token punctuation">[</span>x<span class="token punctuation">]</span>
<span class="token keyword">def</span> <span class="token function">union</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> a <span class="token operator">&lt;</span> b<span class="token punctuation">:</span>
    P<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> a
  <span class="token keyword">else</span><span class="token punctuation">:</span>
    P<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dijkstra" tabindex="-1"><a class="header-anchor" href="#dijkstra" aria-hidden="true">#</a> Dijkstra</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> sys<span class="token punctuation">,</span> heapq
D <span class="token operator">=</span> <span class="token punctuation">[</span>INF<span class="token punctuation">]</span><span class="token operator">*</span>N
q <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
heapq<span class="token punctuation">.</span>heappush<span class="token punctuation">(</span>q<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> start<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">while</span> q<span class="token punctuation">:</span>
  cw<span class="token punctuation">,</span> cn <span class="token operator">=</span> heapq<span class="token punctuation">.</span>heappop<span class="token punctuation">(</span>q<span class="token punctuation">)</span>

  <span class="token keyword">if</span> D<span class="token punctuation">[</span>cn<span class="token punctuation">]</span> <span class="token operator">&lt;</span> cw<span class="token punctuation">:</span> <span class="token keyword">continue</span>
  <span class="token keyword">for</span> w<span class="token punctuation">,</span> n <span class="token keyword">in</span> G<span class="token punctuation">[</span>cn<span class="token punctuation">]</span><span class="token punctuation">:</span>
    nw <span class="token operator">=</span> cw <span class="token operator">+</span> w
    <span class="token keyword">if</span> nw <span class="token operator">&lt;</span> D<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">:</span>
      D<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> nw
      heapq<span class="token punctuation">.</span>heappush<span class="token punctuation">(</span>q<span class="token punctuation">,</span> <span class="token punctuation">(</span>nw<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bellman-ford-1" tabindex="-1"><a class="header-anchor" href="#bellman-ford-1" aria-hidden="true">#</a> Bellman ford</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>D<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>V<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>E<span class="token punctuation">)</span><span class="token punctuation">:</span>
    a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> G<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
    <span class="token keyword">if</span> D<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">!=</span> INF <span class="token keyword">and</span> D<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">></span> D<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">+</span>c<span class="token punctuation">:</span>
      D<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> D<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">+</span>c
      <span class="token keyword">if</span> i <span class="token operator">!=</span> V<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
<span class="token keyword">return</span> <span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="floyd-warshall-1" tabindex="-1"><a class="header-anchor" href="#floyd-warshall-1" aria-hidden="true">#</a> Floyd Warshall</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">for</span> k <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">:</span>
  G<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">:</span>
      dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">min</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">+</span>dp<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lcs" tabindex="-1"><a class="header-anchor" href="#lcs" aria-hidden="true">#</a> LCS</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>S1<span class="token punctuation">,</span> S2<span class="token punctuation">,</span> N1<span class="token punctuation">,</span> N2
D <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">*</span><span class="token punctuation">(</span>N1<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N2<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> N1<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> N2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> S1<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> S2<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
      D<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> D<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
      D<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>D<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> D<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lis" tabindex="-1"><a class="header-anchor" href="#lis" aria-hidden="true">#</a> LIS</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> L<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">></span>L<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">:</span>
      dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="knapsack" tabindex="-1"><a class="header-anchor" href="#knapsack" aria-hidden="true">#</a> Knapsack</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>N<span class="token punctuation">,</span> K <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
G <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">]</span>

dp <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">*</span><span class="token punctuation">(</span>K<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> N<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> K<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    cw<span class="token punctuation">,</span> cv <span class="token operator">=</span> G<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>

    <span class="token keyword">if</span> cw <span class="token operator">&lt;=</span> j<span class="token punctuation">:</span>
      dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> cv<span class="token operator">+</span>dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span>cw<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
      dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="topological-sort" tabindex="-1"><a class="header-anchor" href="#topological-sort" aria-hidden="true">#</a> Topological sort</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>G<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span>
indegree<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span>
q <span class="token operator">=</span> deque<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> inDegree<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
    q<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>

<span class="token keyword">while</span> q<span class="token punctuation">:</span>
  cur <span class="token operator">=</span> q<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>
  ans<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cur<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> i <span class="token keyword">in</span> G<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">:</span>
    inDegree<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token keyword">if</span> inDegree<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
      q<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="현대인의-생활문화" tabindex="-1"><a class="header-anchor" href="#현대인의-생활문화" aria-hidden="true">#</a> 현대인의 생활문화</h1>
<ul>
<li>
<p>매너, 에티켓 : 예의, 범절</p>
</li>
<li>
<p>동양의 매너 : 5덕(인의예지신), 5륜(군신유의, 부자유친, 부부유별, 장유유서, 붕우유신)</p>
</li>
<li>
<p>서양의 매너</p>
</li>
<li>
<p>서신소개</p>
<ul>
<li>개봉한 상태로 의뢰한 사람에게 전달 -&gt; 의뢰인은 내용확인</li>
<li>소개장을 써주신 분에게 진행상활 말씀드릴것</li>
</ul>
</li>
<li>
<p>인사</p>
<ul>
<li>만났을 때나 헤어질 때 예를 표하는 말이나 행동</li>
</ul>
</li>
<li>
<p>절의 종류 : 큰절, 평절, 반절</p>
</li>
<li>
<p>여성의 큰절 : 공수, 손을 어깨 높이로 올린다 몸을 45도 고개를 숙여서 이마를 손등에 붙인다,
오른발위에 왼발, 몸을 굽힌다 손등을 이마에서 떼지말고 , 일어난다, 굴신례 15도</p>
</li>
<li>
<p>여성의 평절 : 공수한 손을 풀어 양옆으로 내린다, 앉는다, 손끝이 바깥을 향하게 바댁에 도다 허리 30도 일어나서 굴신례 30도</p>
</li>
<li>
<p>남성의 큰절 : 읍례, 공수한 손을 눈썹 높이, 팔꿈치를 열지 않고 이마를 공수한 손에 댄다 일어난다, 공수</p>
</li>
<li>
<p>남성의 평절 : 읍례X, 이마가 손등에 닿으면 즉시 일어난다</p>
</li>
<li>
<p>여성의 큰절 : 손을 이마에 붙인 채로 허리 45도, 굴신례 15도</p>
</li>
<li>
<p>여성의 평절 : 손을 올리지 않는다 허리 30도, 굴신례 15도</p>
</li>
<li>
<p>남성의 큰절 : 읍례, 좀이따 일어남</p>
</li>
<li>
<p>남성의 평절 : 읍례X, 바로 일어남</p>
</li>
<li>
<p>반절</p>
</li>
</ul>
<ol>
<li>여성 : 평절 앉은 자세까지</li>
<li>남성 : 머리와 엉덩ㅇ ㅣ가 수평</li>
<li>이후에 공수 X</li>
</ol>
<ul>
<li>
<p>경례</p>
<ul>
<li>의례식 90도 : 관혼상제</li>
<li>45도 : 특별</li>
<li>30도 : 평상 시</li>
<li>15도 : 친한 사이</li>
</ul>
</li>
<li>
<p>세계 각 국의 인사법</p>
<ul>
<li>인도 : 나마스테</li>
<li>중동 : 앗사람 알라이쿰</li>
<li>중국 : 손흔들기, 공수 (손이 가슴에)</li>
<li>태국 : 와이 -&gt; 손을 합장한 모습, 사와디캅</li>
</ul>
</li>
<li>
<p>방문 시 기본 매너</p>
</li>
<li>
<p>오후 3시 ~ 5시 적당</p>
</li>
<li>
<p>병문안은 빠를 수록 좋음 미리 알릴 것 오기전에</p>
</li>
<li>
<p>꽃은 삼가</p>
</li>
<li>
<p>접대</p>
</li>
<li>
<p>손님이 소지품 두즌 장소 마련</p>
</li>
<li>
<p>손윗사람인 경우 잘 도착했는지 전화</p>
</li>
<li>
<p>출산</p>
</li>
<li>
<p>출산 : 병원에서 2~3일 입원</p>
</li>
<li>
<p>산후조리 : 산후조리원을 이용하기도 함</p>
</li>
<li>
<p>출산후 삼칠일 (21일) 동안 외부인 방문 자제</p>
</li>
<li>
<p>전통 : 아들-&gt; 고추 숯 솔잎, 딸-&gt;숯 솔잎</p>
</li>
<li>
<p>생일</p>
</li>
<li>
<p>첫돌 : 만 1살이 되는 첫 생일 : 돌잡이</p>
</li>
<li>
<p>환갑 : 61세가 되는 생일, 일갑자가 돌아옴</p>
</li>
<li>
<p>연령별 생일 명칭 약관, 이립, 불혹, 지천명 이순 환갑 진갑 고희 산수 미수 졸수 상수</p>
</li>
<li>
<p>성년의 날</p>
<ul>
<li>남자(관례) : 댕기머리 자르고 상투만들어서 갓을 씌우는 의식</li>
<li>여자(계례) : 머리 올려 비녀를 꽂는 의식</li>
</ul>
</li>
<li>
<p>혼례</p>
<ul>
<li>전통혼례의 절차 : 의혼, 앞놀이, 신랑입장, 기러기, 전안례, 초례청, 손 씻기, 맞절(교배례), 합근례 순잔과 표주박 술 마시기</li>
<li>함: 결혼 전날 신랑 집에서 신부집으로 보내는 상자</li>
<li>함진애비 : 하인이나 사람을 사서 함을 지고 감</li>
<li>함 내용 : 오곡 주머니 ,청홍채단, 혼서지 (혼인문서), 물욕기, 예물 등</li>
<li>함진애비 일행은 신부쪽 친지들과 여흥을 가짐</li>
<li>납폐 : 신랑 측에서 혼서와 채단, 예물을 함에 담아 보내는 것</li>
<li>봉채떡 : 함을 받기 위해 신부 집에서 준비하는 음식</li>
</ul>
</li>
<li>
<p>현대식 결혼식</p>
<ul>
<li>폐백 : 신부가 시댁 어른들께 첫인사 올리는 의례</li>
<li>순서 : 부모 -&gt; 조부모 -&gt; 백부내외 -&gt; 숙부내외 -&gt; 형제</li>
<li>들러리 : 형제 자매, 신랑 신부의 친구들, 친척, 화동</li>
</ul>
</li>
<li>
<p>경조사 장례</p>
</li>
<li>
<p>서양의 장례식</p>
<ul>
<li>교회에서 조용한 가운데 엄숙히 진행</li>
<li>미사나 예배가 끝난 후 공동묘지로 장례행렬 시작</li>
<li>행렬의 선두에는 목사님과 신부님, 가장 가까운 유족, 친척과 지인 순으로 이동</li>
<li>남자 유족은 각자 세 삽씩 흙을 관위로 던지고 여자들을 꽃과 작은 꽃다발을 던짐</li>
</ul>
</li>
<li>
<p>장례 절차</p>
<ol>
<li>장례 첫째날 : 임종-&gt;수시-&gt;사망증명서-&gt;발상-&gt;부고</li>
<li>장례 둘째날 : 염습-&gt;입관-&gt;영좌 설치-&gt;성복-&gt;조문</li>
<li>장례 셋째날 : 발인-&gt;운구-&gt;하관-&gt;성분(봉분)-&gt;위령제</li>
</ol>
</li>
<li>
<p>장례 후 제의</p>
<ol>
<li>반우제 : 집으로 돌아와 영혼을 집에 맞아들이는 행사</li>
<li>삼우제 : 묘소에서 장례를 치른지 3일째 되는 날에 드리는 제사</li>
<li>사십구제 : 장례일로부터 49일째 되는 날에 지내는 제사</li>
<li>백일제 : 장례 후 백일째 되는 날에 지내는 제사</li>
</ol>
</li>
<li>
<p>조문 예절</p>
<ul>
<li>방명록 서명 -&gt; 분향과 헌화 -&gt; 재배(큰절2) -&gt; 조문(평절1) -&gt; 부의금 전달</li>
<li>가까운 사람이라면 즉시 찾아가서 애도의 뜻을 전하고 장례절차 돕기</li>
<li>일반적으로 염이 끝나고 준비가 된 임종 다음날 조문을 간다</li>
</ul>
</li>
<li>
<p>조문 시 분향하는 방법</p>
</li>
<li>
<p>유교식 : 영전에 분향 후 큰절을 두 번하고 난 후, 상주와 평절</p>
</li>
<li>
<p>기독교식 : 꽃을 올리고 (꽃봉오리가 조문객 쪽으로), 기도 후 상주와 평절</p>
</li>
<li>
<p>조의금 전달</p>
</li>
<li>
<p>문상을 마친 후 물러나와 부의함에 직접 넣음</p>
</li>
<li>
<p>상주에게 직접 건네는 것은 결례</p>
</li>
<li>
<p>봉투에 부의, 근조, 조의 라고 씀</p>
</li>
<li>
<p>제례의 종류</p>
</li>
<li>
<p>기제사, 차례, 시제사</p>
</li>
<li>
<p>차례상</p>
<ul>
<li>1열 : 수저, 잔, 떡국, 시루떡</li>
<li>2열 : 전, 육적, 소적, 전, 어적</li>
<li>3열 : 육탕, 소탕, 어탕</li>
<li>4열 : 포, 나물, 간장, 나박김치, 식혜</li>
<li>5열 : 과일 한과</li>
</ul>
</li>
<li>
<p>진설의 순서는 시접과 잔반을 먼저 올린뒤에 1열 부터 놓는다</p>
</li>
<li>
<p>신주 : 고, 비, 조고, 조비</p>
</li>
<li>
<p>청탁금지법</p>
</li>
<li>
<p>부정청탁</p>
</li>
<li>
<p>금품수수 금지</p>
<ul>
<li>동일인으로 부터 1회 100만원 초과 매 회계연도 3000만원 초과 금품 등 수수</li>
<li>직무와 관련하여 1회 100만원 이하 금품 등 수수</li>
<li>배우자가 수수 금지 금품을 받은 경우</li>
<li>외부 강의시 대통령령으로 정하는 금액을 초과하는 사례금 수수</li>
<li>식사비(3만), 선물(5만), 경조사비(5만, 결혼, 장례만), 금품(100만)</li>
<li>부의금 + 화환 &lt;= 10만원</li>
</ul>
</li>
<li>
<p>저작권법</p>
<ul>
<li>무행동 방식 주의 (우리나라의 저작권법)
<ul>
<li>저작물은 창작하는 동시에 발생</li>
<li>저작권이 발생은 어떠한 절차나 행동양식을 요하지 않는다</li>
</ul>
</li>
<li>방식주의 (우리나라의 특허권)
<ul>
<li>이미 알려진 기술이 아니어야하고 산업에 이용 가능한 기술이어야 발생</li>
</ul>
</li>
<li>저작 인격권 : 공표권, 성명표시권, 동일성 유지권</li>
<li>저작 재산권 : 저작권을 어떤 방법권로 이용하느냐에 따른 권리, 복제권, 공연권, 공중송신권, 전시권...</li>
<li>저작 인접권 : 저작물의 전달자로서의 역할을 하는 자에게 부여되는 권리</li>
</ul>
</li>
<li>
<p>직장매너</p>
</li>
<li>
<p>20대 자산형성</p>
</li>
<li>
<p>국민 연금보험 : 보험료는 소득의 9%</p>
</li>
<li>
<p>퇴직 연금 제도</p>
<ul>
<li>일시금 / 연금으로 나누어진다</li>
<li>DB형 (회사가 운용지시) : 은행 예금 방식, 근로자가 미리 금액을 알 수 있다.</li>
<li>DC형 (근로자가 운용지시) : 주로 주식이나 채권 투자, 금액을 알 수 없다</li>
</ul>
</li>
<li>
<p>주택 연금 제도 (역모기지론)</p>
<ul>
<li>만 55세 이상의 고령자가 금융기관에 자신이 살고있는 주택을 담보로 제공한 뒤, 매달 고정적인 생활자금을 연금식으로 받는 장기주택 저당대출</li>
</ul>
</li>
<li>
<p>예산 생활</p>
<ul>
<li>가처분 소득 : 총 소득 - 비소비지출 (세금, 국민연금, 건강보험)</li>
</ul>
</li>
<li>
<p>크라우드 펀딩 : 리워드형, 기부형, 대출형, 투자형</p>
</li>
<li>
<p>사회적 기업 : 일자리 제공형, 사회서비스 제공형, 혼합형, 지역사회공헌형, 기타형</p>
</li>
<li>
<p>가족 호칭</p>
<ul>
<li>좌동, 시동생, 시숙</li>
</ul>
</li>
<li>
<p>SMART 경청법</p>
<ul>
<li>주제, 출처, 주장, 반응, 특색</li>
</ul>
</li>
<li>
<p>포도주 라벨 : 와인 이름, 생산지, 와이너리 이름, 양조장 설립년도, 당도</p>
</li>
<li>
<p>세코 아보카토 아마빌레 돌체</p>
</li>
<li>
<p>브리 세크 두스 (므왈레 리퀘르)</p>
</li>
<li>
<p>보르도, 부르고뉴 잔</p>
</li>
<li>
<p>아페리티프, 앙트레, 쁠라, 프로마쥬, 디저트, 커피/차</p>
</li>
<li>
<p>바게트 크로와상 에스까르고 푸아그라 크레프</p>
</li>
</ul>
</div></template>


