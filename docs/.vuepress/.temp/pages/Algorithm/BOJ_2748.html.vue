<template><div><h3 id="_2748-피보나치-수2-b2" tabindex="-1"><a class="header-anchor" href="#_2748-피보나치-수2-b2" aria-hidden="true">#</a> 2748 : 피보나치 수2 (B2)</h3>
<ul>
<li>&quot;알고리즘 분류-DP&quot;에서 안 푼 문제이길래 한 번 풀어봤다.</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>N <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

L <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">*</span><span class="token number">89</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> N<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    L<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> L<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span>L<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span>

<span class="token keyword">print</span> <span class="token punctuation">(</span>L<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


