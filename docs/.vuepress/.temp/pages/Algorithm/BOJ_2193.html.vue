<template><div><h3 id="_2193-이친수-s3" tabindex="-1"><a class="header-anchor" href="#_2193-이친수-s3" aria-hidden="true">#</a> 2193 : 이친수 (S3)</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>N <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
dp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">*</span>N
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> N<span class="token punctuation">)</span><span class="token punctuation">:</span>
    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">+</span>dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span>N<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>피보나치였다</li>
</ul>
</div></template>


