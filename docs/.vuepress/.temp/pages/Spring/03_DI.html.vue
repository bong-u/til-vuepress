<template><div><h3 id="의존-주입-di-dependency-injection-을-하는-방법" tabindex="-1"><a class="header-anchor" href="#의존-주입-di-dependency-injection-을-하는-방법" aria-hidden="true">#</a> 의존 주입 (DI : Dependency Injection)을 하는 방법</h3>
<ol>
<li>
<p>Assembler라는 별도의 클래스 생성</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Assembler</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">MemberDao</span> memberDao<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">MemberRegisterService</span> regSvc<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Assembler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        memberDao <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MemberDao</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        regSvc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MemberRegisterService</span><span class="token punctuation">(</span>memberDao<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">MemberDao</span> <span class="token function">getMemberDao</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> memberDao<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">MemberRegisterService</span> <span class="token function">getMemberRegisterService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> regSvc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Spring에서 지원하는 DI 사용</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppCtx</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MemberDao</span> <span class="token function">memberDao</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MemberDao</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MemberRegisterService</span> <span class="token function">memberRegSvc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MemberRegisterService</span><span class="token punctuation">(</span><span class="token function">memberDao</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="di방식" tabindex="-1"><a class="header-anchor" href="#di방식" aria-hidden="true">#</a> DI방식</h3>
<ol>
<li>Constructor 방식<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MemberListPrinter</span> <span class="token function">listPrinter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MemberListPrinter</span><span class="token punctuation">(</span><span class="token function">memberDao</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">memberPrinter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>Setter method 방식<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">MemberInfoPrinter</span> <span class="token function">infoPrinter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">MemberInfoPrinter</span> infoPrinter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MemberInfoPrinter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	infoPrinter<span class="token punctuation">.</span><span class="token function">setMemberDao</span><span class="token punctuation">(</span><span class="token function">memberDao</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	infoPrinter<span class="token punctuation">.</span><span class="token function">setPrinter</span><span class="token punctuation">(</span><span class="token function">memberPrinter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> infoPrinter<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<ul>
<li>constructor 방식이 훨씬 깔끔해보인다.</li>
<li>java bean에서는 getter와 setter를 이용해서 property를 정의한다고 한다.</li>
</ul>
<h3 id="두-개-이상의-configuration-파일-사용-autowired-활용" tabindex="-1"><a class="header-anchor" href="#두-개-이상의-configuration-파일-사용-autowired-활용" aria-hidden="true">#</a> 두 개 이상의 Configuration 파일 사용 : @Autowired 활용</h3>
<ul>
<li>
<p>AppConf1.java</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConf1</span> <span class="token punctuation">{</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>AppConf2.java</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConf2</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Autowired</span>
	<span class="token keyword">private</span> <span class="token class-name">MemberDao</span> memberDao<span class="token punctuation">;</span>
	<span class="token annotation punctuation">@Autowired</span>
	<span class="token keyword">private</span> <span class="token class-name">MemberPrinter</span> memberPrinter<span class="token punctuation">;</span>

	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>MainForSpring.java</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">AppConf1</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">AppConf2</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Autowired annotation을 통해 다른 설정 파일의 객체를 가져올 수 있다.</p>
</li>
</ul>
<h3 id="두-개-이상의-configuration-파일-사용-import-활용" tabindex="-1"><a class="header-anchor" href="#두-개-이상의-configuration-파일-사용-import-활용" aria-hidden="true">#</a> 두 개 이상의 Configuration 파일 사용 : @Import 활용</h3>
<ul>
<li>
<p>AppConfImport.java</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Import</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token class-name">AppConf2</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfImport</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>MainForSpring.java</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">AppConfImport</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 클래스 한 개만 명시해줘도 가능</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="타입만으로-빈을-구할-수-있다" tabindex="-1"><a class="header-anchor" href="#타입만으로-빈을-구할-수-있다" aria-hidden="true">#</a> 타입만으로 빈을 구할 수 있다</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">VersionPrinter</span> versionPrinter <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">MemberPrinter</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>다만, 같은 타입의 빈 객체가 2개 이상 존재한다면 에러 발생</li>
</ul>
</div></template>


