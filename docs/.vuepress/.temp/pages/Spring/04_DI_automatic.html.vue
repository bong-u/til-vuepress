<template><div><h3 id="maven-project-만들기-복습" tabindex="-1"><a class="header-anchor" href="#maven-project-만들기-복습" aria-hidden="true">#</a> Maven project 만들기 복습</h3>
<ol>
<li>pom.xml을 만든다.</li>
<li>프로젝트 구조를 만든다
<ul>
<li>구조는 프로젝트폴더/src/main/java/패키지/클래스 이다.</li>
</ul>
</li>
<li>eclipse에서 import maven project로 Maven dependencies를 인식시킨다</li>
</ol>
<h3 id="autowired를-이용한-자동-객체-주입" tabindex="-1"><a class="header-anchor" href="#autowired를-이용한-자동-객체-주입" aria-hidden="true">#</a> @Autowired를 이용한 자동 객체 주입</h3>
<ul>
<li>
<p>방법1 : Field에 적용</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MemberListPrinter</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">MemberDao</span> memberDao<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">MemberPrinter</span> printer<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">MemberListPrinter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Member</span><span class="token punctuation">></span></span> members <span class="token operator">=</span> memberDao<span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        members<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>m <span class="token operator">-></span> printer<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>방법2 : Method에 적용</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MemberListPrinter</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">MemberDao</span> memberDao<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">MemberPrinter</span> printer<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">MemberListPrinter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMemberDao</span><span class="token punctuation">(</span><span class="token class-name">MemberDao</span> memberDao<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>memberDao <span class="token operator">=</span> meberDao<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMemberPrinter</span><span class="token punctuation">(</span><span class="token class-name">MemberPrinter</span> memberPrinter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>printer <span class="token operator">=</span> printer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Member</span><span class="token punctuation">></span></span> members <span class="token operator">=</span> memberDao<span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        members<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>m <span class="token operator">-></span> printer<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>결과</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">MemberListPrinter</span> <span class="token function">listPrinter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 일일이 객체를 주입할 필요가 없다</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MemberListPrinter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="qualifier" tabindex="-1"><a class="header-anchor" href="#qualifier" aria-hidden="true">#</a> @Qualifier</h3>
<ul>
<li>AppCtx.java<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">"printer"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">MemberPrinter</span> <span class="token function">memberPrinter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MemberPrinter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>MemberListPrinter.java<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">"printer"</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">MemberPrinter</span> printer<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>자동 주입 가능한 빈이 두 개 이상일 때 특정 빈을 한정하기 위해 사용한다</li>
<li>필드, 메소드 둘 다 사용 가능하다</li>
<li>@Qualifier annotation이 없으면 빈의 이름을 한정자로 지정한다</li>
</ul>
<h3 id="autowired의-필수-여부를-지정하는-방법" tabindex="-1"><a class="header-anchor" href="#autowired의-필수-여부를-지정하는-방법" aria-hidden="true">#</a> @Autowired의 필수 여부를 지정하는 방법</h3>
<ul>
<li>의존 객체를 꼭 주입할 필요가 없는 경우가 있다</li>
<li>아래의 세 방법은 필드에도 적용 가능하다</li>
</ul>
<ol>
<li>required=false<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span><span class="token punctuation">(</span>required <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDateFormatter</span><span class="token punctuation">(</span><span class="token class-name">DateTimeForMatter</span> formatterOpt<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>일치하는 빈이 없으면 할당을 자체를 하지 않음</li>
</ul>
</li>
<li>Optional<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDateFormatter</span><span class="token punctuation">(</span><span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DateTimeFormatter</span><span class="token punctuation">></span></span> formatterOpt<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>formatterOpt<span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>dateTimeFormatter <span class="token operator">=</span> formatterOpt<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>dateTimeFormatter <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>일치하는 빈이 없으면 값이 없는 Optional을 할당</li>
</ul>
</li>
<li>@Nullable<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDateFormatter</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">DateTiemFormatter</span> formatterOpt<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>일치하는 빈이 없으면 null값을 전달</li>
</ul>
</li>
</ol>
<h3 id="자동-주입-명시적-의존-주입" tabindex="-1"><a class="header-anchor" href="#자동-주입-명시적-의존-주입" aria-hidden="true">#</a> 자동 주입, 명시적 의존 주입</h3>
<ul>
<li><strong>둘 다 수행한 경우 자동 주입</strong>을 통해 빈을 주입한다</li>
<li>자동 주입, 명시적 수동 주입을 섞어서 사용하지 말자</li>
</ul>
</div></template>


